import React, { useState } from 'react'
import { useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import './carousel.less'

const Carousel = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      backgrounds: allFile(
        filter: { sourceInstanceName: { eq: "backgrounds" } }
      ) {
        nodes {
          relativePath
          childImageSharp {
            fluid(maxWidth: 4000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)

  const images = data.backgrounds.nodes.map(node => {
    return {
      id: node.id,
      url: node.childImageSharp.fluid.src,
      base64: node.childImageSharp.fluid.base64,
      fluid: node.childImageSharp.fluid
    }
  })

  const [currentImgIndex, setCurrentImgIndex] = useState(0)

  setTimeout(
    () => setCurrentImgIndex((currentImgIndex + 1) % images.length),
    6000
  )

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <div className='carousel-content'>{children}</div>

      <div className='carousel-image-container'>
        <div className='carousel-images'>
          {images.map((image, index) => (
            <div className={index !== currentImgIndex ? 'hidden' : ''}>
              <Img fluid={image.fluid} key={image.id} width='100%' />
            </div>
          ))}
        </div>

        <div className='carousel-black-layer' />
      </div>
    </div>
  )
}

export default Carousel
