import React from 'react';
import logo from './logo.svg';
import './App.css';
class App extends React.Component{
constructor(){
  super()
  this.state={
      name:"",
      password:"",
  }

}


render() 
{
    return(
        <div>
            <h1>Form validation</h1>
            <input type="Email" placeholder="Enter Email ID"></input><br></br>
            <input type="Password" placeholder="Enter Password"></input><br></br><br></br>
            <button onClick={()=>this.press()}>Press Me</button>
        </div>
    )
}
}
export default App;