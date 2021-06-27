import React from 'react';

import './App.scss'

import Header from './components/header/Header'
import ToDo from './components/todo/todo.js';


function App() {

  return (
    <>
      <Header />
      <ToDo />
    </>
  );

}

export default App