import React, { FC, useEffect } from 'react';

import { useCustomRouter } from '../hooks/use-custom-router';
const withGuestOnly = (RootComponent: FC): FC => {
    return (props) => {
        const isAuthenticated = localStorage.getItem('isLoggedIn');
        const { toHomePage } = useCustomRouter();

        useEffect(() => {
            if (isAuthenticated) {
                toHomePage();
            }
        }, [isAuthenticated, toHomePage]);

        if (!isAuthenticated) {
            return <RootComponent {...props} />;
        }

        return null;
    };
};
export default withGuestOnly;
