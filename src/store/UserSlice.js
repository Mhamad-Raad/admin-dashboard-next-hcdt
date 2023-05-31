import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    name: 'works',
  },
];

export const UsersSlice = createSlice({
  name: 'usersSlice',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    deleteUser: (state, action) => {
      const index = state.findIndex((user) => user.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { addUser, deleteUser } = UsersSlice.actions;

export default UsersSlice.reducer;
