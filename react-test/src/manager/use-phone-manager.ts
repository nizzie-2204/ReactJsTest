import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import {
    addPhone as addPhoneSlice,
    editPhone as editPhoneSlice,
    fetchPhones as fetchPhonesSlice,
    IPhone,
    removePhone as removePhoneSlice,
} from '../features/phone/phone-slice';
import { setSelectedPhone as setSelectedPhoneSlice } from '../features/phone/selected-phone-slice';

interface IPhoneManager {
    addPhone: (phone: IPhone) => void;
    editPhone: (id: string, phone: Partial<IPhone>) => void;
    removePhone: (id: string) => void;
    fetchPhones: () => void;
    setSelectedPhone: (isSet: boolean, phone: IPhone) => void;
}
export const usePhoneManager = (): IPhoneManager => {
    const dispatch = useDispatch();

    const addPhone = useCallback(
        (phone: IPhone) => {
            dispatch(addPhoneSlice(phone));
        },
        [dispatch],
    );

    const editPhone = useCallback(
        (id: string, phone: Partial<IPhone>) => {
            dispatch(
                editPhoneSlice({
                    id,
                    data: phone,
                }),
            );
        },
        [dispatch],
    );
    const fetchPhones = useCallback(async () => {
        const json = await fetch('./data.json');
        const data = await json.json();

        dispatch(fetchPhonesSlice(data));
    }, [dispatch]);

    const removePhone = useCallback(
        (id: string) => {
            dispatch(removePhoneSlice(id));
        },
        [dispatch],
    );

    const setSelectedPhone = useCallback(
        (isSet: boolean, phone: IPhone) => {
            dispatch(
                setSelectedPhoneSlice({
                    isSet: isSet,
                    data: phone,
                }),
            );
        },
        [dispatch],
    );

    return {
        addPhone,
        editPhone,
        fetchPhones,
        removePhone,
        setSelectedPhone,
    };
};
