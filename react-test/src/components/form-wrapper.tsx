import React, { FormEvent, JSX, PropsWithChildren } from 'react';

interface IFormWrapper {
    title: string;
    onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}
export const FormWrapper = ({ title, onSubmit, children }: PropsWithChildren<IFormWrapper>): JSX.Element => {
    return (
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8 flex flex-col items-center">
                <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                    {title}
                </h1>
                <form className="space-y-4 md:space-y-6 w-full flex flex-col" onSubmit={onSubmit}>
                    {children}
                </form>
            </div>
        </div>
    );
};
