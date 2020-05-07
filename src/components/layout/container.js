import React from 'react'

const Container = ({ children, className, backgroundColor, style, md }) => (
  <div
    className={(md ? 'container-md ' : 'container ') + (className || '')}
    style={{
      ...(style || {}),
      backgroundColor: backgroundColor || 'white'
    }}
  >
    {children}
  </div>
)

export default Container
