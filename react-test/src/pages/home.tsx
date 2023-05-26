import React, { JSX, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Button } from '../components/button';
import { ModalConfirmDeletePhone } from '../components/modal-confirm-delete-phone';
import { Spinner } from '../components/spinner';
import { IPhone } from '../features/phone/phone-slice';
import withAuthenticated from '../hocs/with-authenticated';
import { useCustomRouter } from '../hooks/use-custom-router';
import { usePhoneManager } from '../manager/use-phone-manager';
import { formatPrice } from '../utils/format-price';

const Home = (): JSX.Element => {
    const phones = useSelector((state: { phones: IPhone[] }) => state.phones);
    const { toAddPage, toEditPage } = useCustomRouter();
    const { fetchPhones, setSelectedPhone } = usePhoneManager();

    useEffect(() => {
        if (!phones.length) {
            fetchPhones();
        }
    }, [fetchPhones, phones]);

    const handleEdit = useCallback(
        (phone: IPhone) => {
            setSelectedPhone(true, phone);
            toEditPage();
        },
        [setSelectedPhone, toEditPage],
    );

    return (
        <>
            <Button type="button" onClick={toAddPage}>
                Add phone
            </Button>
            <ModalConfirmDeletePhone />
            <div className="w-screen h-screen flex items-center justify-center">
                <div className="max-w-4xl grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {phones && phones.length > 0 ? (
                        phones.map((product) => (
                            <div key={product.id} className="cursor-pointer">
                                <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="object-cover group-hover:opacity-75"
                                    />
                                </div>
                                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                                <p className="mt-1 text-lg font-medium text-gray-900">{formatPrice(product.price)}</p>
                                <Button type="button" onClick={() => handleEdit(product)}>
                                    Edit
                                </Button>
                                <Button>Delete</Button>
                            </div>
                        ))
                    ) : (
                        <div className="w-screen h-screen flex items-center justify-center">
                            <Spinner />
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default withAuthenticated(Home);
