import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

export default function Banner () {
  const data = useStaticQuery(graphql`
    query {
      banner: file(relativePath: { eq: "bandeau.jpg" }) {
        relativePath
        childImageSharp {
          fluid(maxWidth: 4000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const image = {
    id: data.banner.id,
    url: data.banner.childImageSharp.fluid.src,
    base64: data.banner.childImageSharp.fluid.base64,
    fluid: data.banner.childImageSharp.fluid
  }

  return (
    <div style={{ width: '100%' }}>
      <Img fluid={image.fluid} width='100%' />
    </div>
  )
}
