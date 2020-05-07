import React from 'react'
import { Row as AntRow } from 'antd'

const Row = ({ children }) => (
  <AntRow gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}>{children}</AntRow>
)

export default Row
