import React from 'react'
import React from React.Component

press()
{
    console.warn("submit")
}

render(){
    return(
        <div>
            <h1>Hello React</h1>
            <button onClick={()=>press()}>Press Me</button>
        </div>
    )
}