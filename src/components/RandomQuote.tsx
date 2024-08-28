import React, { useMemo } from "react";
import { Card, Button, Spin } from "antd";
import { useGetRandomQuoteQuery } from "../lib/api";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavorite,
  removeFavorite,
  selectFavoriteQuotes,
  selectSelectedQuote,
  setSelectedQuote,
} from "../features/quotes/quotesSlice";
import styles from "../styles/RandomQuote.module.css";

const RandomQuote: React.FC = () => {
  const {
    data: randomQuote,
    error,
    isLoading,
    refetch,
  } = useGetRandomQuoteQuery();
  const selectedQuote = useSelector(selectSelectedQuote);
  const dispatch = useDispatch();
  const favoriteQuotes = useSelector(selectFavoriteQuotes);

  const quote = selectedQuote || randomQuote;

  const isFavorite = quote
    ? favoriteQuotes.some((q) => q._id === quote._id)
    : false;

  const handleFavoriteToggle = () => {
    if (quote) {
      if (isFavorite) {
        dispatch(removeFavorite(quote._id));
      } else {
        dispatch(addFavorite(quote));
      }
      // Update localStorage
      const updatedFavorites = isFavorite
        ? favoriteQuotes.filter((q) => q._id !== quote._id)
        : [...favoriteQuotes, quote];
      localStorage.setItem("favoriteQuotes", JSON.stringify(updatedFavorites));
    }
  };

  const handleDeselectQuote = () => {
    dispatch(setSelectedQuote(null));
  };

  const memoizedQuote = useMemo(
    () => (
      <div className={styles.quoteContent}>
        {isLoading ? (
          <Spin size="large" />
        ) : error ? (
          <div>Error: {JSON.stringify(error)}</div>
        ) : quote ? (
          <>
            <p className={styles.quoteText}>{quote.content}</p>
            <p className={styles.quoteAuthor}>- {quote.author}</p>
          </>
        ) : null}
      </div>
    ),
    [isLoading, error, quote]
  );

  return (
    <Card
      className={styles.quoteCard}
      title={selectedQuote ? "Selected Quote" : "Random Quote"}
    >
      {memoizedQuote}
      <div className={styles.buttonContainer}>
        <Button type="primary" onClick={handleFavoriteToggle} disabled={!quote}>
          {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
        </Button>
        {selectedQuote ? (
          <Button onClick={handleDeselectQuote}>Deselect Quote</Button>
        ) : (
          <Button onClick={() => refetch()} className={styles.newQuoteButton}>
            New Quote
          </Button>
        )}
      </div>
    </Card>
  );
};

export default RandomQuote;
