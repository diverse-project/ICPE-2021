import React, { useState } from 'react'
import { Button, Layout, Menu } from 'antd'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import { Link, StaticQuery, graphql } from 'gatsby'

import './header.less'

const { Header } = Layout

const AppHeader = ({ data }) => {
  const items = getMenuItems(data)

  const [menuCollpased, setMenuCollapsed] = useState(true)

  return (
    <>
      <Header
        id='header'
        style={{
          paddingX: 0,
          backgroundColor: 'white',
          borderTop: '4px solid #b52c49'
        }}
      >
        <div className='header-container'>
          <div className='brand'>
            <Link to='/'>ICPE 2021</Link>
          </div>

          <div className='hide-on-desktop'>
            <Button
              type='primary'
              onClick={() => setMenuCollapsed(!menuCollpased)}
            >
              {React.createElement(
                menuCollpased ? MenuUnfoldOutlined : MenuFoldOutlined
              )}
            </Button>
          </div>

          <DesktopMenu items={items} />
        </div>

        <MobileMenu items={items} collapsed={menuCollpased} />
      </Header>
    </>
  )
}

const MobileMenu = ({ items, collapsed }) => (
  <div className={'hide-on-desktop' + (collapsed ? ' hidden' : '')}>
    <Menu mode='inline' className='header-menu mobile-menu'>
      {Object.entries(items).map(([category, item]) => (
        <MenuItem key={category} category={category} item={item} />
      ))}
    </Menu>
  </div>
)

const DesktopMenu = ({ items }) => (
  <div className='hide-on-mobile'>
    <Menu mode='horizontal' className='header-menu'>
      {Object.entries(items).map(([category, item]) => (
        <MenuItem key={category} category={category} item={item} />
      ))}
    </Menu>
  </div>
)

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
            <Link to={link.path}>{link.label}</Link>
          </Menu.Item>
        ))}
      </Menu.SubMenu>
    )
  } else {
    return (
      <Menu.Item className='header-menu-item' {...props}>
        <Link to={item.path}>{category.toLocaleUpperCase()}</Link>
      </Menu.Item>
    )
  }
}

function getMenuItems (data) {
  return data.allMarkdownRemark.edges
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
