import React, {Component} from 'react';

// import logo from '../images/logo.svg';
import './styles/house.css';

class HousePage extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    {/*<img src={logo} className="App-logo" alt="logo" />*/}
                    <h2>It's the House page!</h2>
                </div>
                <p className="App-intro">
                    This is page is all about the House of Reps.
                </p>
                <pre>/house</pre>
            </div>
        );
    }
}

export default HousePage;
