import {v4 as uuidv4} from "uuid";

export   const INIT_MESSAGES=[
    {
      id:uuidv4(),
      author:"BOT",
      text:"Hi, lets talk!",
    },
  ];

export   const BOT_MESSAGES=
    {
      id:uuidv4(),
      author:"BOT",
      text:"Thanks! So, lets keep...",
    };

export const INIT_CHAT=[
  {
    id:uuidv4(),
    name:'First chat',
  },
  {
    id:uuidv4(),
    name:'Second chat',
  },
];