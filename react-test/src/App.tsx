import './index.css';

import React, { JSX, ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';

import AddPhone from './pages/add-phone';
import Home from './pages/home';
import Login from './pages/login';

interface IRoute {
    path: string;
    component: ReactElement;
}

function App(): JSX.Element {
    const routes: IRoute[] = [
        {
            path: '/login',
            component: <Login />,
        },
        {
            path: '/',
            component: <Home />,
        },
        {
            path: '/add',
            component: <AddPhone />,
        },
        {
            path: '/edit',
            component: <AddPhone />,
        },
    ];
    return (
        <div className="App">
            <Routes>
                {routes.map((route, i) => {
                    const { path, component } = route;

                    return <Route key={i} path={path} element={component} />;
                })}
            </Routes>
        </div>
    );
}

export default App;
