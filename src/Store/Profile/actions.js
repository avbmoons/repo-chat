import { SHOW_NAME, SET_NAME } from "./constants";

export const toggleName={
    type: SHOW_NAME,   
};

export const setName=(newName)=>({
    type:SET_NAME,
    newName,

});
