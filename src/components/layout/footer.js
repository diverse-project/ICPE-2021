import React from 'react'
import { Layout, Typography } from 'antd'

const { Footer } = Layout

const AppFooter = () => (
  <Footer
    style={{
      height: '80px',
      textAlign: 'center',
      paddingLeft: 0,
      paddingRight: 0
    }}
  >
    <Typography.Paragraph>
      2021 ACM/SPEC International Conference on Performance Engineering. All
      Rights Reserved
    </Typography.Paragraph>
  </Footer>
)

export default AppFooter
