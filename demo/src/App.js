import React from 'react';
class App extends React.Component{
    render(){
        return(
            <div>
                <h1>Upload File in React js</h1>
                <input type="file" onChange={(event)=>this.upload()} name="img"/>
            </div>
        )
    }
}
export default App;