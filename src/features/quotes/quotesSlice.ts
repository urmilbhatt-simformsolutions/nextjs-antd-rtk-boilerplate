import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../lib/store";
import { Quote } from "../../lib/api";

interface QuotesState {
  selectedQuote: Quote | null;
  favoriteQuotes: Quote[];
}

const initialState: QuotesState = {
  selectedQuote: null,
  favoriteQuotes: [],
};

export const quotesSlice = createSlice({
  name: "quotes",
  initialState,
  reducers: {
    setSelectedQuote: (state, action: PayloadAction<Quote | null>) => {
      state.selectedQuote = action.payload;
    },
    addFavorite: (state, action: PayloadAction<Quote>) => {
      if (!state.favoriteQuotes.some((q) => q._id === action.payload._id)) {
        state.favoriteQuotes.push(action.payload);
      }
    },
    removeFavorite: (state, action: PayloadAction<string>) => {
      state.favoriteQuotes = state.favoriteQuotes.filter(
        (q) => q._id !== action.payload
      );
    },
    setFavoriteQuotes: (state, action: PayloadAction<Quote[]>) => {
      state.favoriteQuotes = action.payload;
    },
  },
});

export const {
  setSelectedQuote,
  addFavorite,
  removeFavorite,
  setFavoriteQuotes,
} = quotesSlice.actions;

export const selectSelectedQuote = (state: RootState) =>
  state.quotes.selectedQuote;
export const selectFavoriteQuotes = (state: RootState) =>
  state.quotes.favoriteQuotes;

export default quotesSlice.reducer;
