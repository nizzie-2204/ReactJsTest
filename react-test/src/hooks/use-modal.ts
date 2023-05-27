import { useCallback, useState } from 'react';

interface UseModal {
    isOpen: boolean;
    closeModal: () => void;
    openModal: () => void;
}

export const useModal = (): UseModal => {
    const [isOpen, setIsOpen] = useState(false);

    const closeModal = useCallback(() => {
        setIsOpen(false);
    }, []);

    const openModal = useCallback(() => {
        setIsOpen(true);
    }, []);

    return {
        isOpen,
        closeModal,
        openModal,
    };
};
