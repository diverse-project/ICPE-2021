import React, { useState } from 'react'

const images = ['rennes.jpg', 'bandeau.jpg']

const Carousel = ({ children }) => {
  const [currentImgIndex, setImgIndex] = useState(0)
  const image = images[currentImgIndex]
  setTimeout(() => setImgIndex((currentImgIndex + 1) % images.length), 8000)

  return (
    <div style={{ width: '100%', backgroundImage: `url(/carousel/${image})` }}>
      <div style={{ backgroundColor: 'rgba(0,0,0, 0.7)' }}>{children}</div>
    </div>
  )
}

export default Carousel
