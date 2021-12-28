import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
//import { Provider } from 'react-redux';
import { Provider } from 'react-redux';
import headerImg from './assets/sharik2.png';
import './App.css';
import {Router} from "./Router";
import { ProfileContext } from './utils/ProfileContext';
import { useState } from 'react';
import { store } from './Store';

const theme=createTheme({
  palette:{
    primary:{
      main:'#3f51b5',
    },
    secondary:{
      main:'#fad791',
    },
  },
});

function App() {

  const [profileName, setProfileName]=useState("default profile name");

  return (
    <Provider store={store}>
    <ProfileContext.Provider value={{profileName, setProfileName}}>
    <ThemeProvider theme={theme}>
    
    <div className="App">
      <div className='App-top'>      
      <header className="App-header">
        <div className='App-header-img'>
          <img src={headerImg} className="App-logo" alt="headerImg" />
        </div>    
      </header>            
      <main>
      <nav className='App-nav'>                    
          <Router />
      </nav>
      </main>
      </div>
      <footer className="App-footer">
      </footer>
    </div>

    </ThemeProvider>      
    </ProfileContext.Provider>      
    </Provider> 
         
   
       
  );
}

export default App;

