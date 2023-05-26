import React, { FC, useEffect } from 'react';

import { useCustomRouter } from '../hooks/use-custom-router';
const withAuth = (RootComponent: FC): FC => {
    return (props) => {
        const isAuthenticated = true;
        const { toLoginPage } = useCustomRouter();

        useEffect(() => {
            if (!isAuthenticated) {
                toLoginPage();
            }
        }, []);

        if (isAuthenticated) {
            return <RootComponent {...props} />;
        }

        return null;
    };
};
export default withAuth;
