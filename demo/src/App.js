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
            <input type="text" onChange={(event)=>{this.setState({name:event.target.value})}}/>
            <p></p>
            <input type="text" onChange={(event)=>{this.setState({password:event.target.value})}}/>
            <button onClick={()=>this.press()}>Press Me</button>
        </div>
    )
}
}
export default App;