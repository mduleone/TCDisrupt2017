import React, {Component} from 'react';

import logo from '../images/logo.svg';
import './styles/app.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    This is the home page of the app, mounted at
                </p>
                <pre>/</pre>
                <p>
                    Dan, check out the routing file at
                </p>
                <pre>../containers/app-container.js</pre>
            </div>
        );
    }
}

export default App;
