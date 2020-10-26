import React from 'react';
import logo from './logo.svg';
import './App.css';
class App extends React.Component{
constructor(){
  super()
  this.state={
      name:"",
      password:"",
      nameError:"",
      passwordError:"",
  }

}
valid()
{

}
submit(){
    if(this.valid())
    {
        alert("submit")
    }
    
}

render() 
{
    return(
        <div>
            <h1>Form validation</h1>
            <input type="text" onChange={(event)=>{this.setState({name:event.target.value})}}/>
            <p>nameError</p>
            <input type="password" onChange={(event)=>{this.setState({password:event.target.value})}}/>
            <p>passwordError</p>
            <button onClick={()=>this.submit()}>Submit</button>
        </div>
    )
}

}
export default App;