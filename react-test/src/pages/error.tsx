import { JSX } from 'react';

import { Button } from '../components/button';
import { useCustomRouter } from '../hooks/use-custom-router';
export const Error = (): JSX.Element => {
    const { toHomePage } = useCustomRouter();
    return (
        <div className="flex items-center justify-center w-screen h-screen">
            <div className="px-40 py-20 bg-white rounded-md shadow-xl">
                <div className="flex flex-col items-center">
                    <h1 className="font-bold text-red-700 text-9xl">404</h1>
                    <h6 className="mb-2 text-2xl font-bold text-center text-red-500 md:text-3xl">
                        <span className="text-red-500">Oops!</span> Page not found
                    </h6>
                    <p className="mb-8 text-center text-red-500 md:text-lg">
                        The page you’re looking for doesn’t exist.
                    </p>
                    <Button
                        className="px-6 py-2 text-sm font-semibold text-red-500 bg-blue-100"
                        onClick={toHomePage}
                        type="button"
                    >
                        Go home
                    </Button>
                </div>
            </div>
        </div>
    );
};
