import {v4 as uuidv4} from "uuid";
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { useTheme } from "@emotion/react";

export function Chat({id, name, chatMark}){
  const theme=useTheme();
    return <ListItem disablePadding style={{backgroundColor:theme.palette.secondary.main,}} >
    <ListItemButton component="a" href="#simple-list" className="Chat-list-btn" key={id=uuidv4()} >
      <ListItemText primary={name} className="Chat-list-item" label={chatMark}  />
    </ListItemButton>
    <Divider light />
  </ListItem>

};