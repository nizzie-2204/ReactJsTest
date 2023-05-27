import clsx from 'clsx';
import React, { JSX, useCallback, useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

import { Button } from '../components/button';
import { HorizontalPhoneCard } from '../components/horizontal-phone-card';
import { ModalConfirmDeletePhone } from '../components/modal-confirm-delete-phone';
import { Spinner } from '../components/spinner';
import { VerticalPhoneCard } from '../components/vertical-phone-card';
import { IPhone } from '../features/phone/phone-slice';
import withAuthenticated from '../hocs/with-authenticated';
import { useCustomRouter } from '../hooks/use-custom-router';
import { useModal } from '../hooks/use-modal';
import { usePhoneManager } from '../manager/use-phone-manager';

const Home = (): JSX.Element => {
    const phones = useSelector((state: { phones: IPhone[] }) => state.phones);
    const selectedPhone = useSelector((state: { selectedPhone: IPhone | '' }) => state.selectedPhone);
    const { toAddPage, toEditPage, toLoginPage } = useCustomRouter();
    const { fetchPhones, setSelectedPhone, removePhone } = usePhoneManager();
    const { isOpen, openModal, closeModal } = useModal();
    const [layoutType, setLayoutType] = useState<'list' | 'grid'>('list');

    const layoutStyle = useMemo<string>(() => {
        return layoutType === 'list' ? 'sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : 'grid-cols-1';
    }, [layoutType]);

    const handleEdit = useCallback(
        (phone: IPhone) => {
            setSelectedPhone(true, phone);
            toEditPage();
        },
        [setSelectedPhone, toEditPage],
    );

    const handleDelete = useCallback(() => {
        selectedPhone && removePhone(selectedPhone.id);
        closeModal();
    }, [closeModal, removePhone, selectedPhone]);

    const handleOpenModal = useCallback(
        (phone: IPhone) => {
            openModal();
            setSelectedPhone(true, phone);
        },
        [openModal, setSelectedPhone],
    );

    const handleCloseModal = useCallback(() => {
        setSelectedPhone(false);
        closeModal();
    }, [closeModal, setSelectedPhone]);

    useEffect(() => {
        if (!phones.length) {
            fetchPhones();
        }
    }, [fetchPhones, phones]);

    const handleChangeLayout = useCallback(() => {
        setLayoutType(layoutType === 'list' ? 'grid' : 'list');
    }, [layoutType]);

    const handleLogout = useCallback(() => {
        localStorage.removeItem('isLoggedIn');
        toLoginPage();
    }, [toLoginPage]);

    const renderList = useMemo(() => {
        return (
            <div className={clsx('max-w-[800px] grid grid-cols-1 gap-x-6 gap-y-10  xl:gap-x-8', layoutStyle)}>
                {phones && phones.length > 0 ? (
                    phones.map((phone) =>
                        layoutType === 'list' ? (
                            <HorizontalPhoneCard
                                key={phone.id}
                                phone={phone}
                                onEdit={() => handleEdit(phone)}
                                onDelete={() => handleOpenModal(phone)}
                            />
                        ) : (
                            <VerticalPhoneCard
                                key={phone.id}
                                phone={phone}
                                onEdit={() => handleEdit(phone)}
                                onDelete={() => handleOpenModal(phone)}
                            />
                        ),
                    )
                ) : (
                    <div className="w-screen h-screen flex items-center justify-center">
                        <Spinner />
                    </div>
                )}
            </div>
        );
    }, [handleEdit, handleOpenModal, layoutStyle, layoutType, phones]);

    return (
        <div className="flex flex-col items-center justify-center my-10 space-y-5">
            <div className="flex items-center justify-between">
                <Button type="button" onClick={toAddPage} className="rounded-none">
                    Add phone
                </Button>

                <Button type="button" onClick={handleChangeLayout} className="rounded-none">
                    Change layout to {layoutType === 'list' ? 'Grid' : 'List'}
                </Button>

                <Button type="button" onClick={handleLogout} className="rounded-none">
                    Logout
                </Button>
            </div>

            {isOpen ? (
                <ModalConfirmDeletePhone isOpen={isOpen} onConfirm={handleDelete} onClose={handleCloseModal} />
            ) : null}

            {renderList}
        </div>
    );
};

export default withAuthenticated(Home);
