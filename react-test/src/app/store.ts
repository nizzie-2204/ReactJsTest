import { configureStore } from '@reduxjs/toolkit';

import phoneReducer from '../features/phone/phone-slice';
import selectedPhoneReducer from '../features/phone/selected-phone-slice';
export default configureStore({
    reducer: {
        phones: phoneReducer,
        selectedPhone: selectedPhoneReducer,
    },
});
