import React from 'react'
import { Layout, Menu } from 'antd'

import './header.css'

const { Header } = Layout

const AppHeader = () => {
  const categories = ['home', 'organization', 'calls', 'program', 'participate']

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
        <div class='brand'>ICPE 2021</div>
        <Menu mode='horizontal' className='header-menu'>
          {categories.map(category => (
            <Menu.Item key={category} className='header-menu-item'>
              <a href={`/${category}`}>{category.toLocaleUpperCase()}</a>
            </Menu.Item>
          ))}
        </Menu>
      </div>
    </Header>
  )
}

export default AppHeader
