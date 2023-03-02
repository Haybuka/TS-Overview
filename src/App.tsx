import React from 'react';
import './App.css';
import Basics from './components/Basics/Basics';
import Context from './components/context/Context';
import { ThemeContextProvider } from './components/context/ThemeContext';
import { UserContextProvider } from './components/context/UserContext';
import Events from './components/Events/Events';
import Reducer from './components/Reducer/Reducer';
import Container from './components/StyleProps/Container';

function App() {
  return (
    <>
      <ThemeContextProvider>
        <UserContextProvider>
          <Context />
        </UserContextProvider>
      </ThemeContextProvider>
    </>
  );
}

export default App;
