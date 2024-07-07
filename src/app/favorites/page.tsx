'use client'

import React from 'react'
import { Typography, List, Card, Button } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { selectFavoriteQuotes, removeFavorite } from '../../features/quotes/quotesSlice'
import styles from '../../styles/FavoriteQuotes.module.css'

const { Title } = Typography

export default function FavoriteQuotes() {
  const favoriteQuotes = useSelector(selectFavoriteQuotes)
  const dispatch = useDispatch()

  return (
    <div className={styles.container}>
      <Title className={styles.title}>Favorite Quotes</Title>
      <List
        className={styles.quotesList}
        dataSource={favoriteQuotes}
        renderItem={(quote) => (
          <List.Item className={styles.quoteItem}>
            <Card>
              <p className={styles.quoteContent}>{quote.content}</p>
              <p className={styles.quoteAuthor}>- {quote.author}</p>
              <Button onClick={() => dispatch(removeFavorite(quote._id))}>
                Remove from Favorites
              </Button>
            </Card>
          </List.Item>
        )}
      />
    </div>
  )
}