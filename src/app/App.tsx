import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './styles/index.css'

import Details from './pages/Details';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

const App = () => {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details" element={<Details />} />
            <Route path="*" element={< NotFound />} />
        </Routes>
    );
}

export default App;