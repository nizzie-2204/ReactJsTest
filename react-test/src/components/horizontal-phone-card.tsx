import React, { JSX } from 'react';

import { formatPrice } from '../utils/format-price';
import { Button } from './button';
import { PhoneCard } from './vertical-phone-card';

export const HorizontalPhoneCard = ({ phone, onEdit, onDelete }: PhoneCard): JSX.Element => {
    return (
        <div key={phone.id} className="cursor-pointer">
            <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img src={phone.image} alt={phone.name} className="object-cover group-hover:opacity-75" />
            </div>
            <h3 className="mt-4 text-sm text-gray-700">{phone.name}</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">{formatPrice(phone.price)}</p>
            <Button type="button" onClick={onEdit}>
                Edit
            </Button>
            <Button type="button" onClick={onDelete}>
                Delete
            </Button>
        </div>
    );
};
