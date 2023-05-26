import React, { FormEvent, JSX, useState } from 'react';

import { Button } from '../components/button';
import { HorizontalPhoneCard } from '../components/horizontal-phone-card';
import { VerticalPhoneCard } from '../components/vertical-phone-card';

interface IPhone {
    name: string;
    id: string;
    yearOfManufacture: string;
    price: string;
    image: string;
    desc: string;
}

export const Login = (): JSX.Element => {
    const [input, setInput] = useState({
        email: '',
        password: '',
    });

    const [data, setData] = useState<IPhone[]>();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const json = await fetch('./data.json');
        const data = await json.json();

        setData(data);
    };
    return (
        <section className="bg-gray-50 ">
            {data?.length ? (
                <div>
                    {data.map((item) => {
                        return (
                            <div key={item.id}>
                                <VerticalPhoneCard />
                                <HorizontalPhoneCard />
                            </div>
                        );
                    })}
                </div>
            ) : null}

            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8 flex flex-col items-center">
                        <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                            Sign in to your account
                        </h1>
                        <form className="space-y-4 md:space-y-6 w-full flex flex-col" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                                    Your email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                    placeholder="sample@gmail.com"
                                    required
                                    value={input.email}
                                    onChange={(e) =>
                                        setInput((prev) => {
                                            return { ...prev, email: e.target.value };
                                        })
                                    }
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="••••••••"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                    required
                                    value={input.password}
                                    onChange={(e) =>
                                        setInput((prev) => {
                                            return { ...prev, password: e.target.value };
                                        })
                                    }
                                />
                            </div>

                            <Button className="self-center w-full" type="submit">
                                Login
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
