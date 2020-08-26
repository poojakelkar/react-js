function Person(props){
    return(
    <div className="person">
        <h1>{props.name}</h1>
        <p>Your age:{props.age}</p>
    </div>
     );
}
ReactDOM.render(<Person name="max" age="28"/>,document.querySelector('#p1'));
ReactDOM.render(<Person name="manu" age="29"/>,document.querySelector('#p2'));