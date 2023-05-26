import clsx from 'clsx';
import React, { ButtonHTMLAttributes, JSX, PropsWithChildren } from 'react';

interface Button extends ButtonHTMLAttributes<HTMLButtonElement> {
    isLoading?: boolean;
    className?: string;
}
export const Button = ({ isLoading, className, children, ...props }: PropsWithChildren<Button>): JSX.Element => {
    return (
        <button
            type="button"
            className={clsx(
                'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium' +
                    ' rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 ' +
                    'focus:outline-none dark:focus:ring-blue-800',
                className,
            )}
            {...props}
        >
            {children}
        </button>
    );
};
