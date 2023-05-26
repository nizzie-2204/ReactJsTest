import React, { FC, useEffect } from 'react';

import { useCustomRouter } from '../hooks/use-custom-router';
const withAuthenticated = (RootComponent: FC): FC => {
    return (props) => {
        const isAuthenticated = localStorage.getItem('isLoggedIn');
        const { toLoginPage } = useCustomRouter();

        useEffect(() => {
            if (!isAuthenticated) {
                toLoginPage();
            }
        }, [isAuthenticated, toLoginPage]);

        if (isAuthenticated) {
            return <RootComponent {...props} />;
        }

        return null;
    };
};

export default withAuthenticated;
