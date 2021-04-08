export interface UsersState {
  users: any[]
}

export enum UsersActionTypes {
  FETCH_USERS = 'FETCH_USERS',
  SET_USERS = 'SET_USERS',
}

interface FetchUsersAction {
  type: UsersActionTypes.FETCH_USERS
}

interface SetUsersAction {
  type: UsersActionTypes.SET_USERS
  payload: any[]
}

export type UsersAction = FetchUsersAction | SetUsersAction
