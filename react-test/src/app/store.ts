import { configureStore } from '@reduxjs/toolkit';

import phoneReducer from '../features/phone/phone-slice';
export default configureStore({
    reducer: {
        phones: phoneReducer,
    },
});
