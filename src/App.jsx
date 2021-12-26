import { ThemeProvider, createTheme } from '@mui/material/styles';
import headerImg from './assets/sharik2.png';
import './App.css';
import {Router} from "./Router";

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

  return (
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
  );
}

export default App;

