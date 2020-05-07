import React from 'react'
import { PageHeader, Typography } from 'antd'
import { graphql } from 'gatsby'

import Layout from '../layout/layout'

export default function Template ({ data }) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout>
      <div className='container-md'>
        <PageHeader
          className='site-page-header'
          onBack={() => window.history.back()}
          title='Previous'
        />

        <Typography.Title level={1}>{frontmatter.title}</Typography.Title>
        <div
          className='blog-post-content'
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        category
      }
    }
  }
`
