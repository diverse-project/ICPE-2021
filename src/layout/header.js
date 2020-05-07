import React from 'react'
import { Layout, Menu } from 'antd'
import { StaticQuery, graphql } from 'gatsby'

import './header.less'

const { Header } = Layout

const AppHeader = ({ data }) => {
  const items = data.allMarkdownRemark.edges
    .map(edge => edge.node.frontmatter)
    .reduce((acc, item) => {
      const content = acc[item.category]
      const newMenuEntry = { label: item.title, path: item.path }

      if (content === undefined) {
        acc[item.category] = newMenuEntry
      } else if (content instanceof Array) {
        acc[item.category] = content.concat(newMenuEntry)
      } else {
        acc[item.category] = [content, newMenuEntry]
      }

      return acc
    }, {})

  return (
    <Header
      id='header'
      style={{
        paddingX: 0,
        height: '80px',
        backgroundColor: 'white',
        borderTop: '4px solid #b52c49'
      }}
    >
      <div className='header-container'>
        <div className='brand'>
          <a href='/'>ICPE 2021</a>
        </div>
        <Menu mode='horizontal' className='header-menu'>
          {Object.entries(items).map(([category, item]) => (
            <MenuItem key={category} category={category} item={item} />
          ))}
        </Menu>
      </div>
    </Header>
  )
}

const MenuItem = props => {
  const { category, item } = props

  if (item instanceof Array) {
    return (
      <Menu.SubMenu
        className='header-menu-item'
        title={category.toLocaleUpperCase()}
        {...props}
      >
        {item.map(link => (
          <Menu.Item key={link.label} className='header-menu-item'>
            <a href={link.path}>{link.label}</a>
          </Menu.Item>
        ))}
      </Menu.SubMenu>
    )
  } else {
    return (
      <Menu.Item className='header-menu-item' {...props}>
        <a href={item.path}>{category.toLocaleUpperCase()}</a>
      </Menu.Item>
    )
  }
}

const query = graphql`
  query MyQuery {
    allMarkdownRemark {
      edges {
        node {
          fileAbsolutePath
          frontmatter {
            title
            path
            category
          }
        }
      }
    }
  }
`

export default () => (
  <StaticQuery query={query} render={data => <AppHeader data={data} />} />
)
