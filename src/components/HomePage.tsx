'use client'

import { Typography, Space, Button } from 'antd'
import Link from 'next/link'
import RandomQuote from './RandomQuote'
import AuthorQuotes from './AuthorQuotes'
import styles from '../styles/HomePage.module.css'

const { Title } = Typography

export default function HomePage() {
  return (
    <div className={styles.container}>
      <Title className={styles.title}>Inspirational Quotes</Title>
      <div className={styles.componentSpace}>
        <RandomQuote />
        <AuthorQuotes />
        <Link href="/favorites">
          <Button type="primary">View Favorite Quotes</Button>
        </Link>
      </div>
    </div>
  )
}