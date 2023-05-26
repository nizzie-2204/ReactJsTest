import { createSlice } from '@reduxjs/toolkit';

export interface IPhone {
    name: string;
    id: string;
    yearOfManufacture: string;
    price: string;
    image: string;
    desc: string;
}

const initialState: IPhone[] = [];

export const phoneSlice = createSlice({
    name: 'phones',
    initialState,
    reducers: {
        addPhone: (state, action) => {
            const phone = action.payload;

            state.push(phone);
            console.log(state);
        },
        fetchPhones: (state, action) => {
            return action.payload;
        },
        editPhone: (state, action) => {
            const id = action.payload.id;
            const newData = action.payload.data;

            const isExisted = state.findIndex((item) => item.id === id);
            console.log({ id, newData, isExisted });
            if (isExisted > -1) {
                state[isExisted] = { ...state[isExisted], ...newData };
            }
        },
        removePhone: (state, action) => {
            return state.filter((item) => item.id !== action.payload);
        },
    },
});

// this is for dispatch
export const { addPhone, fetchPhones, removePhone, editPhone } = phoneSlice.actions;

// this is for configureStore
export default phoneSlice.reducer;
