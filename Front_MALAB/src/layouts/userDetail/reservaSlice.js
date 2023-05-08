import { createSlice } from "@reduxjs/toolkit";  

export const reservaSlice = createSlice({
    name: 'reserva',
    initialState: {
        choosenReserva : {}
    },
    reducers: {
        addChoosenReserva: (state, action) => {
            return {
                ...state,
                ...action.payload
            } 
        },
    }
})

export const { addChoosenReserva } = reservaSlice.actions;

export const reservaData = (state) => state.reserva;

export default reservaSlice.reducer;