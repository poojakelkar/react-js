import React from 'react';
import logo from './logo.svg';
import './App.css';
class App extends React.Component{
constructor(){
  super()

}

press()
{
    console.warn("submit")
}

render() 
{
    return(
        <div>
            <h1>Hello React</h1>
            <button onClick={()=>this.press()}>Press Me</button>
        </div>
    )
}
}
export default App;