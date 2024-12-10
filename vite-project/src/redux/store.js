import { configureStore } from "@reduxjs/toolkit";
import reducer from "./Appointmentreduce";
import loginReduce from "./loginReduce";
import appointmentReduce from "./Appointmentreduce";
import { combineReducers } from "redux";

const store = configureStore({
  reducer: combineReducers({
    reducer,
    session: loginReduce,
    appointment: appointmentReduce
  })
});

export default store