import React from 'react'
import Tension from '../tension'
import './index.scss'
import image1 from '../images/image-1.jpg'
import image2 from '../images/image-2.jpg'
import image3 from '../images/image-3.jpg'
import image4 from '../images/image-4.jpg'
import image5 from '../images/image-5.jpg'

const images = [
  image1, image2, image3, image4, image5
]

const Image = ({ image }) => (
  <div style={{
    width: '100%',
    paddingBottom: '50%',
    height: '0',
    marginBottom: '50vh',
    overflow: 'hidden'
  }}>
    {image && (
      <img
        style={{
          display: 'block',
          width: '100%',
          position: 'absolute',
          left: 0,
          top: 0
        }}
        src={image}
        alt='Hi!'
      />
    )}
  </div>
)

const IndexPage = ({ location }) => (
  <div className='content'>
    {images.map(image => (
      <Tension
        ScrolledChild={<Image />}
        AnimatedChild={<Image image={image} />}
      />
    ))}
  </div>
)

export default IndexPage
