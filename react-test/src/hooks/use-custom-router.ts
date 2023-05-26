import { useNavigate } from 'react-router-dom';

interface IUseCustomRouter {
    toAddPage: () => void;
    toEditPage: () => void;
    toLoginPage: () => void;
    toHomePage: () => void;
}
export const useCustomRouter = (): IUseCustomRouter => {
    const navigate = useNavigate();

    const toAddPage = () => {
        navigate('/add');
    };

    const toLoginPage = () => {
        navigate('/login');
    };

    const toEditPage = () => {
        navigate('/edit');
    };

    const toHomePage = () => {
        navigate('/');
    };

    return {
        toAddPage,
        toLoginPage,
        toEditPage,
        toHomePage,
    };
};
