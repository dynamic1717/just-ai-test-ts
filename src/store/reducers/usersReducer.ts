import { UsersState, UsersAction, UsersActionTypes } from '../../types/users'

const initialState: UsersState = {
  users: [],
}

export const usersReducer = (
  state = initialState,
  action: UsersAction
): UsersState => {
  switch (action.type) {
    case UsersActionTypes.FETCH_USERS:
      return state
    case UsersActionTypes.SET_USERS:
      return { users: action.payload }
    default:
      return state
  }
}
