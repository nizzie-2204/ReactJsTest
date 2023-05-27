import React, { JSX } from 'react';

import { IPhone } from '../features/phone/phone-slice';
import { formatPrice } from '../utils/format-price';
import { Button } from './button';

export interface PhoneCard {
    phone: IPhone;
    onEdit: () => void;
    onDelete: () => void;
}

export const VerticalPhoneCard = ({ phone, onEdit, onDelete }: PhoneCard): JSX.Element => {
    return (
        <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img
                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                src={phone.image}
                alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{phone.name}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{formatPrice(phone.price)}</p>
            </div>
            <div className="flex flex-col">
                <Button type="button" onClick={onEdit}>
                    Edit
                </Button>
                <Button type="button" onClick={onDelete}>
                    Delete
                </Button>
            </div>
        </div>
    );
};
