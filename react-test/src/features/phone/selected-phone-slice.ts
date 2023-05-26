import { createSlice } from '@reduxjs/toolkit';

import { IPhone } from './phone-slice';

const initialState: IPhone | '' = '';

export const selectedPhoneSlice = createSlice({
    name: 'selected-phone',
    initialState,
    reducers: {
        setSelectedPhone: (state, action) => {
            const isSet = action.payload.isSet;

            return isSet ? action.payload.data : undefined;
        },
    },
});

// this is for dispatch
export const { setSelectedPhone } = selectedPhoneSlice.actions;

// this is for configureStore
export default selectedPhoneSlice.reducer;
