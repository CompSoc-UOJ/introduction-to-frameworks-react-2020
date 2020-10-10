import React from 'react';
import logo from './logo.svg';
import './App.css';
import  Greet  from './components/Greet.js'
import  Welcome  from './components/Welcome.js'
import  Hello  from './components/Hello.js'
import  Message  from './components/Message.js'
import  Counter  from './components/Counter.js'


function App() {
  return (
    <div className="App">
      {/* <Welcome/>
      <Greet/> */}
      {/* <Hello/> */}
      {/* <Greet name="Samitha" birthday="1995/11/23">
        <p>new children</p>
      </Greet>
      <Greet name="Rasika" birthday="1995/04/25"/>
      <Greet name="Dilshan" birthday="1995/06/01"/> */}
      {/* <Welcome name="Samitha" birthday="1995/04/25"/>
      <Welcome name="Rasika" birthday="1995/04/25"/>
      <Welcome name="Dilshan" birthday="1995/06/01"/> */}
      {/* <Message/> */}
      <Counter/>
    </div>
  );
}

export default App;
