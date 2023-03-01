import React from 'react';
import './App.css';
import Basics from './components/Basics/Basics';
import Context from './components/context/Context';
import { ThemeContextProvider } from './components/context/ThemeContext';
import Events from './components/Events/Events';
import Reducer from './components/Reducer/Reducer';
import Container from './components/StyleProps/Container';

function App() {
  return (
    <>
      <ThemeContextProvider>
        <Context />
      </ThemeContextProvider>
    </>
  );
}

export default App;
