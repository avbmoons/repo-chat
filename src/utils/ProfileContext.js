import React from "react";
//import { Component, useContext } from "react";

export const ProfileContext=React.createContext({profileName:"default profile name", setProfileName:()=>{}});

// export const withProfileContext=(Component)=>(...props)=>{
//     const {profileName, setProfileName}=useContext(ProfileContext);

//     return <Component {...props} profileName={profileName} setProfileName={setProfileName} />
// };
