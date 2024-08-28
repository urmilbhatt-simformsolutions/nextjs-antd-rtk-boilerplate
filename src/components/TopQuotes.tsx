import React from 'react';
import { useGetTopQuotesQuery } from '../lib/api';
import { List, Card, Spin, Empty } from 'antd';
import styles from '../styles/TopQuotes.module.css';
import { Quote } from '../lib/api';

const TopQuotes: React.FC = () => {
  const { data, error, isLoading } = useGetTopQuotesQuery();

  if (isLoading) return <Spin size="large" />;
  if (error) return <div>Error: {JSON.stringify(error)}</div>;

  const quotes = data?.results || [];

  return (
    <Card title="Top 10 Quotes" className={styles.topQuotesCard}>
      {quotes.length > 0 ? (
        <List
          dataSource={quotes}
          renderItem={(quote: Quote) => (
            <List.Item className={styles.quoteItem}>
              <p className={styles.quoteContent}>{quote.content}</p>
              <p className={styles.quoteAuthor}>- {quote.author}</p>
            </List.Item>
          )}
        />
      ) : (
        <Empty description="No top quotes available" />
      )}
    </Card>
  );
};

export default TopQuotes;