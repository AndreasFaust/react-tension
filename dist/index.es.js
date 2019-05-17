import React, { useRef, useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var Tension = function Tension(_ref) {
  var ScrolledChild = _ref.ScrolledChild,
      AnimatedChild = _ref.AnimatedChild;
  var ref = useRef();

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      elementRested = _useState2[0],
      setRested = _useState2[1];

  var _useSpring = useSpring(function () {
    return {
      from: {
        transform: "translate3d(0, 0px, 0)"
      },
      config: {
        clamp: true
      }
    };
  }),
      _useSpring2 = _slicedToArray(_useSpring, 2),
      props = _useSpring2[0],
      set = _useSpring2[1];

  useEffect(function () {
    if (elementRested) return;
    var windowHeight = window.innerHeight * 0.95;

    function onScroll() {
      var rect = ref.current.getBoundingClientRect();

      if (rect.top < windowHeight * 1.2) {
        if (rect.top < windowHeight / 3 * 2) {
          set({
            transform: "translate3d(0, -".concat(windowHeight - rect.top, "px, 0)"),
            delay: 10 // onRest: () => { setRested(true) }

          });
        } else {
          set({
            transform: "translate3d(0, -35px, 0)"
          });
        }
      } else {
        set({
          transform: "translate3d(0, 0px, 0)"
        });
      }
    }

    window.setTimeout(onScroll, 500);
    window.addEventListener('scroll', onScroll);
    return function () {
      return window.removeEventListener('scroll', onScroll);
    };
  }, [elementRested]);
  return React.createElement(React.Fragment, null, React.createElement("div", {
    ref: ref,
    style: {
      opacity: !elementRested ? 0 : 1,
      pointerEvents: !elementRested && 'none',
      marginBottom: '25vh'
    }
  }, ScrolledChild), !elementRested && React.createElement(animated.div, {
    style: {
      position: 'fixed',
      zIndex: '100',
      top: '100vh',
      left: '0',
      width: '100%',
      transform: props.transform
    }
  }, AnimatedChild));
};

export default Tension;
//# sourceMappingURL=index.es.js.map
