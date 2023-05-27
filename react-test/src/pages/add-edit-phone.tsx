import React, { FormEvent, JSX, useCallback, useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { Button } from '../components/button';
import { FormWrapper } from '../components/form-wrapper';
import { IPhone } from '../features/phone/phone-slice';
import withAuthenticated from '../hocs/with-authenticated';
import { useCustomRouter } from '../hooks/use-custom-router';
import { usePhoneManager } from '../manager/use-phone-manager';
import { convertFileToBase64 } from '../utils/convert-file-to-base64';

const AddEditPhone = (): JSX.Element => {
    const { addPhone, editPhone } = usePhoneManager();
    const location = useLocation();
    const { toHomePage } = useCustomRouter();
    const [activeState, setActiveState] = useState<'edit' | 'add'>('add');
    const selectedPhone = useSelector((state: { selectedPhone: IPhone | '' }) => state.selectedPhone);
    const [previewImg, setPreviewImg] = useState('');
    const initialInput = useMemo(() => {
        return {
            name: '',
            id: '',
            yearOfManufacture: '',
            price: '',
            image: '',
            desc: '',
        };
    }, []);
    const [input, setInput] = useState(initialInput);

    useEffect(() => {
        if (location.pathname === '/edit') {
            setActiveState('edit');
        } else {
            setActiveState('add');
        }
    }, [location.pathname]);

    useEffect(() => {
        if (activeState === 'edit' && selectedPhone) {
            setInput(selectedPhone);
        }
    }, [activeState, selectedPhone]);

    const handleSubmit = useCallback(
        async (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();

            activeState === 'edit' && selectedPhone
                ? editPhone(selectedPhone.id, {
                      name: input.name,
                      yearOfManufacture: input.yearOfManufacture,
                      price: input.price,
                      image: input.image,
                      desc: input.desc,
                  })
                : addPhone({
                      name: input.name,
                      id: Date.now().toString(),
                      yearOfManufacture: input.yearOfManufacture,
                      price: input.price,
                      image: input.image,
                      desc: input.desc,
                  });

            setInput(initialInput);
            toHomePage();
        },
        [activeState, addPhone, editPhone, initialInput, input, selectedPhone, toHomePage],
    );

    return (
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <FormWrapper title={activeState === 'edit' ? 'Edit phone' : 'Add phone'} onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        required
                        value={input.name}
                        onChange={(e) =>
                            setInput((prev) => {
                                return { ...prev, name: e.target.value };
                            })
                        }
                    />
                </div>
                <div>
                    <label htmlFor="yearOfManufacture" className="block mb-2 text-sm font-medium text-gray-900">
                        Year of manufacture
                    </label>
                    <input
                        type="number"
                        id="yearOfManufacture"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        required
                        value={input.yearOfManufacture}
                        onChange={(e) =>
                            setInput((prev) => {
                                return { ...prev, yearOfManufacture: e.target.value };
                            })
                        }
                    />
                </div>
                <div>
                    <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900">
                        Price
                    </label>
                    <input
                        type="number"
                        id="price"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        required
                        value={input.price}
                        onChange={(e) =>
                            setInput((prev) => {
                                return { ...prev, price: e.target.value };
                            })
                        }
                    />
                </div>
                <div>
                    <label htmlFor="desc" className="block mb-2 text-sm font-medium text-gray-900">
                        Description
                    </label>
                    <input
                        type="text"
                        id="desc"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        required
                        value={input.desc}
                        onChange={(e) =>
                            setInput((prev) => {
                                return { ...prev, desc: e.target.value };
                            })
                        }
                    />
                </div>
                <div>
                    <label htmlFor="img" className="block mb-2 text-sm font-medium text-gray-900">
                        Image
                    </label>
                    <input
                        type="file"
                        accept="image/*"
                        id="img"
                        disabled={activeState === 'edit'}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        placeholder="sample@gmail.com"
                        onChange={async (e) => {
                            if (e && e.target.files) {
                                const img = URL.createObjectURL(e.target.files[0]);
                                setPreviewImg(img);
                                const imageSrc = await convertFileToBase64(e.target.files[0]);

                                setInput((prev) => {
                                    return { ...prev, image: imageSrc as string };
                                });
                            }
                        }}
                    />
                </div>

                {previewImg && <img src={previewImg} alt="preview" />}
                <Button className="self-center w-full" type="submit">
                    {activeState === 'edit' ? 'Edit' : 'Add'}
                </Button>
            </FormWrapper>
        </div>
    );
};

export default withAuthenticated(AddEditPhone);
