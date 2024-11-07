import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    appointments: [],
};

 const appointmentSlice = createSlice({
   name: "appointment",
   initialState,
   reducers: {
     addAppointments: (state, action) => {
      
     },
     removeAppointment: (state, action) => {},
     setAppointments: (state, action) => {
       // action.payload.appointments
       // {data, userid}
       // array.filter(e=>e) --> []
       const { data } = action.payload;
       
        // esto devuelve un array. -->userId
       //1 forma. --> const final = data.filter(cita => cita.userid === userid)
       // 2 forma --> state.appointments = data.filter(cita => cita.userid === userid);
       

       state.appointments = data ;
     },
   },
 });

const { actions, reducer } = appointmentSlice;

export const { addAppointments, removeAppointment, setAppointments } = actions;
export default reducer;
