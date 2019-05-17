import React, { useEffect, useRef, useState } from 'react'
import { useSpring, animated } from 'react-spring'

const Tension = ({ ScrolledChild, AnimatedChild }) => {
  const ref = useRef()
  const [elementRested, setRested] = useState(false)
  const [props, set] = useSpring(() => ({
    from: { transform: `translate3d(0, 0px, 0)` },
    config: { clamp: true }
  }))

  useEffect(() => {
    if (elementRested) return
    const windowHeight = window.innerHeight * 0.95
    function onScroll () {
      const rect = ref.current.getBoundingClientRect()
      if (rect.top < windowHeight * 1.2) {
        if (rect.top < (windowHeight / 3) * 2) {
          set({
            transform: `translate3d(0, -${windowHeight - rect.top}px, 0)`,
            delay: 10
            // onRest: () => { setRested(true) }
          })
        } else {
          set({
            transform: `translate3d(0, -35px, 0)`
          })
        }
      } else {
        set({
          transform: `translate3d(0, 0px, 0)`
        })
      }
    }
    window.setTimeout(onScroll, 500)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [elementRested])

  return (
    <>
      <div
        ref={ref}
        style={{
          opacity: !elementRested ? 0 : 1,
          pointerEvents: !elementRested && 'none',
          marginBottom: '25vh'
        }}
      >
        {ScrolledChild}
      </div>
      {!elementRested && (
        <animated.div
          style={{
            position: 'fixed',
            zIndex: '100',
            top: '100vh',
            left: '0',
            width: '100%',
            transform: props.transform
          }}
        >
          {AnimatedChild}
        </animated.div>
      )}
    </>
  )
}

export default Tension
