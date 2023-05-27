import React, { FormEvent, JSX, useCallback, useState } from 'react';

import { Button } from '../components/button';
import { FormWrapper } from '../components/form-wrapper';
import withGuestOnly from '../hocs/with-guest-only';
import { useCustomRouter } from '../hooks/use-custom-router';

const Login = (): JSX.Element => {
    const { toHomePage } = useCustomRouter();
    const [input, setInput] = useState({
        email: 'sample@gmail.com',
        password: '123',
    });

    const handleSubmit = useCallback(
        async (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();

            localStorage.setItem('isLoggedIn', JSON.stringify(true));
            toHomePage();
        },
        [toHomePage],
    );

    return (
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <FormWrapper title="Sign in to your account" onSubmit={handleSubmit}>
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
            </FormWrapper>
        </div>
    );
};

export default withGuestOnly(Login);
