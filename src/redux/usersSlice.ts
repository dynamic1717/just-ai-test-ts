import { createSlice } from '@reduxjs/toolkit'

const usersSlice = createSlice({
  name: 'usersData',
  initialState: {
    users: [] as any[],
  },
  reducers: {
    setUsers(state, action) {
      state.users = action.payload
    },
  },
})

export default usersSlice.reducer

export const { setUsers } = usersSlice.actions
