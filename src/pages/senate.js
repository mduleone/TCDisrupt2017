import React, {Component} from 'react';

// import logo from '../images/logo.svg';
import './styles/senate.css';

class SenatePage extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    {/*<img src={logo} className="App-logo" alt="logo" />*/}
                    <h2>It's the Senate page!</h2>
                </div>
                <p className="App-intro">
                    This is page is all about the senate.
                </p>
                <pre>/senate</pre>
            </div>
        );
    }
}

export default SenatePage;

