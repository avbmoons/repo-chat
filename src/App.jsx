//import headerImg from './sharik2.png';
import headerImg from './assets/sharik2.png';
import './App.css';
import { Message } from './Components/Message/Message';

function App() {

  const messageText='The message text here...';

  return (
    <div className="App">
      <header className="App-header">
        <img src={headerImg} className="App-logo" alt="headerImg" />

      </header>
      <main>
        <div className="Message-block">
        <Message text={messageText}/>  
        </div>
        
      </main>
      <footer className="App-footer">

      </footer>
    </div>
  );
}

export default App;
