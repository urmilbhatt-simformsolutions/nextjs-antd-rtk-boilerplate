import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../lib/store'

interface Quote {
  _id: string;
  content: string;
  author: string;
}

interface QuotesState {
  selectedQuote: Quote | null;
  favoriteQuotes: Quote[];
}

const initialState: QuotesState = {
  selectedQuote: null,
  favoriteQuotes: JSON.parse(localStorage.getItem('favoriteQuotes') || '[]'),
}

export const quotesSlice = createSlice({
  name: 'quotes',
  initialState,
  reducers: {
    setSelectedQuote: (state, action: PayloadAction<Quote>) => {
      state.selectedQuote = action.payload;
    },
    addFavorite: (state, action: PayloadAction<Quote>) => {
      if (!state.favoriteQuotes.some(q => q._id === action.payload._id)) {
        state.favoriteQuotes.push(action.payload);
        localStorage.setItem('favoriteQuotes', JSON.stringify(state.favoriteQuotes));
      }
    },
    removeFavorite: (state, action: PayloadAction<string>) => {
      state.favoriteQuotes = state.favoriteQuotes.filter(q => q._id !== action.payload);
      localStorage.setItem('favoriteQuotes', JSON.stringify(state.favoriteQuotes));
    },
  },
})

export const { setSelectedQuote, addFavorite, removeFavorite } = quotesSlice.actions

export const selectSelectedQuote = (state: RootState) => state.quotes.selectedQuote
export const selectFavoriteQuotes = (state: RootState) => state.quotes.favoriteQuotes

export default quotesSlice.reducer