import React, {Component} from 'react';

// import logo from '../images/logo.svg';
import './styles/state-nj.css';

class StateNjPage extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    {/*<img src={logo} className="App-logo" alt="logo" />*/}
                    <h2>It's the NJ Legislature page!</h2>
                </div>
                <p className="App-intro">
                    This is page is all about the NJ State Legislature.
                </p>
                <pre>/state-nj</pre>
            </div>
        );
    }
}

export default StateNjPage;
