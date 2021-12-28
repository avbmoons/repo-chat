//import {v4 as uuidv4} from "uuid";
//import { Link } from "react-router-dom";
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { useTheme } from "@emotion/react";
import { useState } from 'react';
//import { style } from '@mui/system';

export function Chat({ id, name,}){
  const theme=useTheme();

  const [selectedIndex, setSelectedIndex] = useState(1);
  const handleListItemClick = (event, index, ) => {
    setSelectedIndex(index);
  };

    return <ListItem key={id} disablePadding style={{backgroundColor:theme.palette.secondary.main,}} button selected={selectedIndex === 2} onClick={(event) => handleListItemClick(event, 2,) } >
    <ListItemButton href="#simple-list" className="Chat-list-btn" >
      {/* <Link to={`/chats/${chatId}`}></Link> */}
      <ListItemText primary={name} className="Chat-list-item" />
    </ListItemButton>
    <Divider light />
  </ListItem>

};

// export function Chat({id, name,}){
//   const theme=useTheme();
//     return <ListItem key={id}  disablePadding style={{backgroundColor:theme.palette.secondary.main,}} >
//     <ListItemButton component="a" href="#simple-list" className="Chat-list-btn" key={id=uuidv4()} >
//       <ListItemText primary={name} className="Chat-list-item" label={''}  />
//     </ListItemButton>
//     <Divider light />
//   </ListItem>

// };