import React, {Component} from 'react';

// import logo from '../images/logo.svg';
import './styles/about.css';

class AboutPage extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    {/*<img src={logo} className="App-logo" alt="logo" />*/}
                    <h2>This page is about us.</h2>
                </div>
                <p className="App-intro">
                    About us.
                </p>
                <pre>/about</pre>
            </div>
        );
    }
}

export default AboutPage;
