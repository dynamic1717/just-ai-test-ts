import axios from 'axios'
import { Dispatch } from 'react'
import { setUsers } from './usersSlice'

const RANDOM_USER_URL =
  'https://randomuser.me/api/?results=1000&inc=id,name,email,registered,picture,login&noinfo'

export const fetchUsers = () => {
  return async (dispatch: Dispatch<any>) => {
    try {
      const response = await axios.get(RANDOM_USER_URL)
      dispatch(setUsers(response.data.results))
    } catch (error) {
      console.log(error)
    }
  }
}
