import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login: false,
  userid: 0,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loggedUsers: (state, action) => {
      // action = {} --> key --> payload, type
     
      state.login = true;
      state.userid = action.payload; // --> action = { payload: { userid: 1 }, ...}
    },
    unloggedUsers: (state, action) => {
      // para desloguearse
      state.login = false;
    },
  },
});

const { actions, reducer } = loginSlice;

export const { loggedUsers, unloggedUsers } = actions;
export default reducer;
