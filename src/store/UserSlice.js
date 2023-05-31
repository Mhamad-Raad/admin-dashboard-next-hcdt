import { createSlice } from '@reduxjs/toolkit';

const initialState = [{
  name: 'works'
}];

export const UsersSlice = createSlice({
  name: 'usersSlice',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    deleteUser: (state, action) => {
      const tempArr = state;
      const newArr = tempArr.filter((user) => user.id !== action.payload);
      state = newArr;
    },
  },
});

export const { addUser, deleteUser } = UsersSlice.actions;

export default UsersSlice.reducer;
