import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/HomePage'
import Catalog from './components/CatalogPage'
import InformationPage from './components/InformationPage'

function App() {


  return (
    <div className='App'>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Catalog" element={<Catalog />} />
      <Route path="/dogs/:name" element={<InformationPage />} />
    </Routes>
    </div>
  );
}

export default App
