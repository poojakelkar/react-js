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
submit(){
    alert("submit")
}

render() 
{
    return(
        <div>
            <h1>Form validation</h1>
            <input type="text" onChange={(event)=>{this.setState({name:event.target.value})}}/>
            <p></p>
            <input type="password" onChange={(event)=>{this.setState({password:event.target.value})}}/>
            <p></p>
            <button onClick={()=>this.submit()}>Submit</button>
        </div>
    )
}

}
export default App;