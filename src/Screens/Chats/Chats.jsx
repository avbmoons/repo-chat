import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useEffect } from 'react';
import {v4 as uuidv4} from 'uuid';
import './Chats.css';
import {MessageList} from '../../Components/MessageList/MessageList';
import { FormSubmit } from '../../Components/FormSubmit/FormSubmit';
import { Navigate, useParams } from 'react-router-dom';
import {AUTHORS, ROUTES} from '../../utils/constants';

function Chats({messages, onAddMessage}) {

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

  const {chatId}=useParams();
  console.log({chatId});

  const handleSubmitMessage=(text)=>{
    const newMessage={id:uuidv4(),author: AUTHORS.HUMAN, text,};
    onAddMessage(newMessage, chatId);
}

  useEffect(()=>{
    let timer;
    if (messages[chatId]?.[messages[chatId].length-1]?.author ===AUTHORS.HUMAN){
      timer=setTimeout(()=>{
        onAddMessage({
            id:uuidv4(),
            author: AUTHORS.BOT,
            text:"Thanks! So, lets keep...",
        }, chatId);
      }, 1500);
    }
    return function(){
      clearTimeout(timer);
      console.log('timer refresh');
    };
  
  },[messages]);

  if (!messages[chatId]) {
    return <Navigate to={ROUTES.CHATS} replace/>
  }

  return (
    <ThemeProvider theme={theme}>   

      <main>
        <div className='Chat-block-box'>       
      
        <section className="Messages-block">
          <article className="Message-list-block">
            <MessageList messages={messages[chatId]} />
          </article>

          <article className="Submit-form-block">
            <FormSubmit onSubmit={handleSubmitMessage} />
          </article>
        </section>

        </div>
      </main>



    </ThemeProvider>
  );
}

export default Chats;

