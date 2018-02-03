import React from 'react';
function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

export default function Greet(props){
  const logged = props.loggedIn;
  if(logged){
    return <UserGreeting/>
  }
  return <GuestGreeting/>
}