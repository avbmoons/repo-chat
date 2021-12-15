import { useEffect, useState } from 'react';
import headerImg from './assets/sharik2.png';
import './App.css';
import {MessageList} from './Components/MessageList/MessageList';
import { MessageForm } from './Components/MessageForm/MessageForm';
import {INIT_MESSAGES} from './constants.js';
import {BOT_MESSAGES} from './constants.js';

function App() {
 
  const[messageList, setMessageList]=useState(INIT_MESSAGES);

  useEffect(()=>{
    let timer;
    if (messageList[messageList.length-1].author !=="BOT"){
      timer=setTimeout(()=>{
        setMessageList([...messageList, BOT_MESSAGES]);
      }, 1500);
    }
    return function(){
      clearTimeout(timer);
      console.log('timer refresh');
    };
  
  },[messageList]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={headerImg} className="App-logo" alt="headerImg" />

      </header>
      <main>
        <section className="Messages-block">
          <article className="Message-list-block">
            <MessageList messageList={messageList} />
          </article>
          <article className="Message-form-block">
            <MessageForm messageList={messageList} setMessageList={setMessageList} />
          </article>
        </section>
        <div className="Message-block">

        </div>
        
      </main>
      <footer className="App-footer">

      </footer>
    </div>
  );
}

export default App;

