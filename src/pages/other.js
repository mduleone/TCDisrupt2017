import React, {Component} from 'react';

import logo from '../images/logo.svg';
import './styles/app.css';

class OtherPage extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>It's the other page!</h2>
                </div>
                <p className="App-intro">
                    This is another page in the app, mounted at
                </p>
                <pre>/other</pre>
            </div>
        );
    }
}

export default OtherPage;
