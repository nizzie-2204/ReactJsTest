import './index.css';

import React, { JSX } from 'react';

import { Login } from './pages/login';
function App(): JSX.Element {
    return (
        <div className="App">
            <Login />
        </div>
    );
}

export default App;
