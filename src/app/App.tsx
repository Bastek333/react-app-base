import { Routes, Route } from 'react-router';
import Home from '../containers/Home/Home';
import Navigation from '../containers/Navigation/Navigation';
import Footer from '../containers/Footer/Footer';
import Vite from '../containers/Vite/Vite';
import React from '../containers/React/React';
import Biome from '../containers/Biome/Biome';
import Page404 from '../containers/Page404/Page404';
import Jokes from '../containers/Jokes/Jokes';
import List from '../containers/List/List';

import './App.css';

function App() {
  return (
    <>
      <Navigation />
      <h1>Vite - React + React Router + Biome</h1>
      <Routes>
        <Route index element={<Home />} />
        <Route path="vite" element={<Vite />} />
        <Route path="react" element={<React />} />
        <Route path="biome" element={<Biome />} />
        <Route path="jokes" element={<Jokes />} />
        <Route path="list" element={<List />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
