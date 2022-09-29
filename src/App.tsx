import React from 'react';
import logo from './logo.svg';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import './App.css';
import { PageHome } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<PageHome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
