import { Routes, Route } from 'react-router';
import Home from '../containers/Home/Home';
import Navigation from '../containers/Navigation/Navigation';
import Vite from '../containers/Vite/Vite';
import React from '../containers/React/React';
import Page404 from '../containers/Page404/Page404';
import Jokes from '../containers/Jokes/Jokes';

import './App.css';

function App() {
  return (
    <>
      <Navigation />
      <h1>Vite - React + React Router</h1>
      <Routes>
        <Route index element={<Home />} />
        <Route path="vite" element={<Vite />} />
        <Route path="react" element={<React />} />
        <Route path="jockes" element={<Jokes />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
}

export default App;
