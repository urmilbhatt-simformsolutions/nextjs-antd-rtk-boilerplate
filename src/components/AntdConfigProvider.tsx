'use client'

import React from 'react'
import { ConfigProvider, theme } from 'antd'
import { useTheme } from 'next-themes'

const AntdConfigProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { theme: currentTheme } = useTheme()

  return (
    <ConfigProvider
      theme={{
        algorithm: currentTheme === 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm,
      }}
    >
      {children}
    </ConfigProvider>
  )
}

export default AntdConfigProvider