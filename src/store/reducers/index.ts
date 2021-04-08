import { combineReducers } from 'redux'
import { usersReducer } from './usersReducer'
import { favsReducer } from './favsReducer'

export const rootReducer = combineReducers({
  usersData: usersReducer,
  favsData: favsReducer,
})

export type RootState = ReturnType<typeof rootReducer>
