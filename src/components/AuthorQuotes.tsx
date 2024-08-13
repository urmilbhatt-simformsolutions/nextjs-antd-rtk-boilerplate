import React, { useState, useEffect, useMemo, useCallback } from "react";
import { Input, List, Card, Spin, Empty, Button } from "antd";
import { useGetQuotesByAuthorQuery } from "../lib/api";
import { useDispatch } from "react-redux";
import { setSelectedQuote } from "../features/quotes/quotesSlice";
import styles from "../styles/AuthorQuotes.module.css";

const AuthorQuotes: React.FC = () => {
  const [author, setAuthor] = useState("");
  const [debouncedAuthor, setDebouncedAuthor] = useState("");
  const { data, error, isLoading } = useGetQuotesByAuthorQuery(
    debouncedAuthor,
    {
      skip: !debouncedAuthor,
    }
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedAuthor(author);
    }, 300);

    return () => {
      clearTimeout(timerId);
    };
  }, [author]);

  const handleSelectQuote = useCallback(
    (quote) => {
      dispatch(setSelectedQuote(quote));
    },
    [dispatch]
  );

  const memoizedQuotesList = useMemo(
    () =>
      data && data.results && data.results.length > 0 ? (
        <List
          className={styles.quotesList}
          dataSource={data.results}
          renderItem={(quote) => (
            <List.Item className={styles.quoteItem}>
              <div>
                <p className={styles.quoteContent}>{quote.content}</p>
                <p className={styles.quoteAuthor}>- {quote.author}</p>
                <Button onClick={() => handleSelectQuote(quote)}>
                  Select Quote
                </Button>
              </div>
            </List.Item>
          )}
        />
      ) : (
        debouncedAuthor &&
        !isLoading && <Empty description="No quotes found for this author" />
      ),
    [data, debouncedAuthor, isLoading, handleSelectQuote]
  );

  return (
    <Card className={styles.authorCard} title="Quotes by Author">
      <Input
        className={styles.authorInput}
        placeholder="Enter author name"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      {isLoading && <Spin size="large" />}
      {error && <div>Error: {JSON.stringify(error)}</div>}
      {!debouncedAuthor && (
        <Empty description="Enter an author name to see quotes" />
      )}
      {memoizedQuotesList}
    </Card>
  );
};

export default AuthorQuotes;
