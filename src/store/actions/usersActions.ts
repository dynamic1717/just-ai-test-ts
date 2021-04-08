import axios from 'axios'
import { Dispatch } from 'redux'
import { UsersAction, UsersActionTypes } from '../../types/users'

const RANDOM_USER_URL =
  'https://randomuser.me/api/?results=1000&inc=id,name,email,registered,picture,login&noinfo'

export const fetchUsers = () => {
  return async (dispatch: Dispatch<UsersAction>) => {
    try {
      const response = await axios.get(RANDOM_USER_URL)
      dispatch({
        type: UsersActionTypes.SET_USERS,
        payload: response.data.results,
      })
      // dispatch(setUsers(response.data.results))
    } catch (error) {
      console.log(error)
    }
  }
}
