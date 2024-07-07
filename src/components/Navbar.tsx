'use client'

import React, { useEffect, useState } from 'react'
import { Layout, Menu, Switch } from 'antd'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import { SunOutlined, MoonOutlined } from '@ant-design/icons'
import styles from '../styles/Navbar.module.css'

const { Header } = Layout

const Navbar: React.FC = () => {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const items = [
    { key: '/', label: <Link href="/">Home</Link> },
    { key: '/favorites', label: <Link href="/favorites">Favorite Quotes</Link> },
  ]

  if (!mounted) {
    return null
  }

  return (
    <Header className={styles.header}>
      <div className={styles.logo}>Inspirational Quotes</div>
      <Menu
        theme="dark"
        mode="horizontal"
        selectedKeys={[pathname]}
        items={items}
        className={styles.menu}
      />
      <Switch
        checkedChildren={<SunOutlined />}
        unCheckedChildren={<MoonOutlined />}
        checked={theme === 'dark'}
        onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        className={styles.themeSwitch}
      />
    </Header>
  )
}

export default Navbar