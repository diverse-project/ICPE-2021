import React from 'react'
import { Layout } from 'antd'

import AppHeader from './header'
import AppFooter from './footer'
import './antd-variables-override.less'
import './layout.less'

const { Content } = Layout

const AppLayout = ({ children }) => (
  <Layout style={{ width: '100vw' }}>
    <AppHeader />
    <Content
      style={{
        backgroundColor: 'white',
        minHeight: 'calc(100vh - 160px)',
        marginTop: -3,
        paddingBottom: 24
      }}
    >
      {children}
    </Content>
    <AppFooter />
  </Layout>
)

export default AppLayout
