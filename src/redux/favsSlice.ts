import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const favsSlice = createSlice({
  name: 'favsData',
  initialState: {
    favs: [] as any[],
    currentCard: null as any | null,
    isCardDragged: false as boolean,
  },
  reducers: {
    setCurrentCard(state, action: PayloadAction<any>) {
      state.currentCard = action.payload
    },
    setFavs(state, action: PayloadAction<any>) {
      state.favs.push(action.payload)
    },
    removeFavCard(state, action: PayloadAction<any>) {
      const newFavs = state.favs.filter(
        (user) => user.login.uuid !== action.payload.login.uuid
      )
      state.favs = newFavs
    },
    startDrag(state) {
      state.isCardDragged = true
    },
    endDrag(state) {
      state.isCardDragged = false
    },
  },
})

export default favsSlice.reducer

export const {
  setCurrentCard,
  setFavs,
  removeFavCard,
  startDrag,
  endDrag,
} = favsSlice.actions
