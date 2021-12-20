import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import headerImg from './assets/sharik2.png';
import './App.css';
import {MessageList} from './Components/MessageList/MessageList';
import { FormSubmit } from './Components/FormSubmit/FormSubmit';
import { INIT_MESSAGES, INIT_CHAT} from './constants.js';
import {BOT_MESSAGES} from './constants.js';
import { ChatList } from './Components/ChatList/ChatList';

function App() {

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
 
  const [chatList, setChatList]=useState(INIT_CHAT);
  
  const [messageList, setMessageList]=useState(INIT_MESSAGES);

  function handleAddMessage(text) {
    const newMessage={id:uuidv4(), text, author:"HUMAN"};
    setMessageList((prevMessageList)=>[...prevMessageList, newMessage]);
    
  }; 
  
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
    <ThemeProvider theme={theme}>
    
    <div className="App">
      <header className="App-header">
        <img src={headerImg} className="App-logo" alt="headerImg" />

      </header>
      <main>
        <div className='Chat-block-box'>       
      
        <section className='Chat-list-block'>
          <article className='Chat-list-box'>
            <ChatList chatList={chatList} setChatList={setChatList} />            
          </article>
        </section>

        <section className="Messages-block">
          <article className="Message-list-block">
            <MessageList messageList={messageList} />
          </article>
          <article className="Message-form-block">
            <FormSubmit onSubmit={handleAddMessage} />
          </article>
        </section>

        </div>
      </main>
      <footer className="App-footer">

      </footer>
    </div>

    </ThemeProvider>
  );
}

export default App;

