import React from 'react';
import logo from './logo.svg';
import './App.css';
class App extends React.Component {
    constructor() {
        super()
        this.state = {
            name: "",
            password: "",
            nameError: "",
            passwordError: "",
        }

    }
    valid() {
        if (!this.state.name.includes("@") && this.state.password.length < 5) {
            this.setState({ nameError: "Invalid Email ID", passwordError: "password is too short" })
        }
        else if (!this.state.name.includes("@")) {
            this.setState({ nameError: "Invalid Email ID" })
        }
        else if (this.state.password.length < 5) {
            this.setState({ passwordError: "password is too short" })
        }
        else {
            return true
        }

    }
    submit() {
        this.setState(
            {
                nameError: "", passwordError: ""
            }
        )

        if (this.valid()) {
            alert("submit")
        }

    }

    render() {
        return (
            <div style={{ padding: "center" }}>
                <h1>Form validation</h1>
                <input type="text" onChange={(event) => { this.setState({ name: event.target.value }) }} />
                <p style={{ color: "red", fontSize: "12px" }}>{this.state.nameError}</p>
                <input type="password" onChange={(event) => { this.setState({ password: event.target.value }) }} />
                <p style={{ color: "red", fontSize: "12px" }}>{this.state.passwordError}</p>
                <button onClick={() => this.submit()}>Submit</button>
            </div>
        );
    }

}
export default App;