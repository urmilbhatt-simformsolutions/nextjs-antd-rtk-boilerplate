"use client";

import { Provider } from "react-redux";
import { store } from "../lib/store";
import { useEffect } from "react";
import { setFavoriteQuotes } from "../features/quotes/quotesSlice";
import { Quote } from "../lib/api";

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const storedFavorites = localStorage.getItem("favoriteQuotes");
    if (storedFavorites) {
      try {
        const parsedFavorites = JSON.parse(storedFavorites);
        if (Array.isArray(parsedFavorites)) {
          store.dispatch(setFavoriteQuotes(parsedFavorites as Quote[]));
        } else {
          console.error("Stored favorites is not an array:", parsedFavorites);
          localStorage.removeItem("favoriteQuotes"); // Clear invalid data
        }
      } catch (error) {
        console.error("Error parsing stored favorites:", error);
        localStorage.removeItem("favoriteQuotes"); // Clear invalid data
      }
    }
  }, []);

  return <Provider store={store}>{children}</Provider>;
}
