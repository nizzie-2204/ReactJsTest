import clsx from 'clsx';
import { JSX } from 'react';

import { Button } from './button';
interface IModalConfirmDeletePhone {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
}

export const ModalConfirmDeletePhone = ({ isOpen, onConfirm, onClose }: IModalConfirmDeletePhone): JSX.Element => {
    return (
        <div>
            {/* Main modal */}
            {isOpen ? (
                <div className="fixed top-0 left-0 right-0 z-50 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50">
                    <div
                        className={clsx(
                            'w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full',
                            isOpen ? 'block' : 'hidden',
                        )}
                    >
                        <div className="relative w-full h-full flex items-center justify-center">
                            {/* Modal content */}
                            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                {/* Modal header */}
                                <div className="flex items-center justify-between p-4 rounded-t">
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                        Are you sure to delete this product
                                    </h3>
                                    <Button
                                        type="button"
                                        className="text-gray-400 bg-transparent mr-0 mb-0 hover:bg-transparent"
                                        onClick={onClose}
                                    >
                                        X
                                    </Button>
                                </div>
                                <div className="flex items-center justify-center p-6 pt-0 space-x-2">
                                    <Button onClick={onConfirm} type="button" className="bg-red-500">
                                        I accept
                                    </Button>
                                    <Button onClick={onClose} type="button" className="bg-gray-500">
                                        Decline
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    );
};
