import React, {Component} from 'react';
import {Link} from 'react-router-dom';

// import logo from '../images/logo.svg';
import './styles/app.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <p className="App-intro">
                    Trump The Pigs is the greatest app ever created. You wish your app was this cool. Act like you you know.
                </p>
                <p>
                    Next, check out the page on the <Link to="/house">House of Representatives</Link>
                </p>
                <pre>/</pre>
                {/*<p>*/}
                    {/*Dan, check out the routing file at*/}
                {/*</p>*/}
                {/*<pre>../containers/app-container.js</pre>*/}
            </div>
        );
    }
}

export default App;
