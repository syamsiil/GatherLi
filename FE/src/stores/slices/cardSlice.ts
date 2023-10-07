import { createSlice } from "@reduxjs/toolkit";
import { ICard } from "interface/card";

const initialCardSlice: { cards: ICard[] } = { cards: [] };

export const cardSlice = createSlice({
  name: "card",
  initialState: initialCardSlice,
  reducers: {
    GET_CARDS: (state, action) => {
      state.cards = action.payload;
    },
  },
});
