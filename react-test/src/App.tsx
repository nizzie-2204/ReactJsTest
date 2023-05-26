import './index.css';

import React, { JSX } from 'react';
import { Route, Routes } from 'react-router-dom';

import { AddPhone } from './pages/add-phone';
import { Login } from './pages/login';
function App(): JSX.Element {
    return (
        <div className="App">
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/add" element={<AddPhone />} />
                <Route path="/edit" element={<AddPhone />} />
            </Routes>
            {/*<Login />*/}
        </div>
    );
}

export default App;
