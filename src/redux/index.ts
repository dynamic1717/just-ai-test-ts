import { combineReducers, configureStore } from '@reduxjs/toolkit'
import favsSlice from './favsSlice'
import usersSlice from './usersSlice'

const rootReducer = combineReducers({
  usersData: usersSlice,
  favsData: favsSlice,
})

export const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof rootReducer>
