import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

interface IUseCustomRouter {
    toAddPage: () => void;
    toEditPage: () => void;
    toLoginPage: () => void;
    toHomePage: () => void;
}
export const useCustomRouter = (): IUseCustomRouter => {
    const navigate = useNavigate();

    const toAddPage = useCallback(() => {
        navigate('/add');
    }, [navigate]);

    const toLoginPage = useCallback(() => {
        navigate('/login');
    }, [navigate]);

    const toEditPage = useCallback(() => {
        navigate('/edit');
    }, [navigate]);

    useCallback(() => {
        navigate('/');
    }, [navigate]);

    const toHomePage = useCallback(() => {
        navigate('/');
    }, [navigate]);

    return {
        toAddPage,
        toLoginPage,
        toEditPage,
        toHomePage,
    };
};
