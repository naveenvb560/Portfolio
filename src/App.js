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
      <Route  path='*' element={
      <Home />
      } />
      <Route path='/Skills' element={<Skills />} />
      <Route path='/Projects' element={<Project />} />
      <Route path='/Experiences' element={<Experience />} />
      </Routes>
      </Layout>
  );
}

export default App;
