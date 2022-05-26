import './App.css';
import React from 'react';
import Layout from '../src/components/UI/Layout'
import Header from './components/UI/Header';
import Home from './components/Pages/Home';
import Skills from './components/Pages/Skills';
import {Routes, Route} from 'react-router-dom'
import Project from './components/Pages/Project';
import Experience from './components/Pages/Experience';

function App() {

  return (
      <Layout>
        <Header />
        <Routes>
      <Route  path='/Portfolio/' element={
      <Home />
      } />
      <Route path='/Portfolio/Skills' element={<Skills />} />
      <Route path='/Portfolio/Projects' element={<Project />} />
      <Route path='/Portfolio/Experiences' element={<Experience />} />
      </Routes>
      </Layout>
  );
}

export default App;
