import React, {Component} from 'react';

// import logo from '../images/logo.svg';
import './styles/issue.css';

class IssuePage extends Component {
    render() {
        const issueId = this.props.match.params.issueId;
        return (
            <div className="App">
                <div className="App-header">
                    {/*<img src={logo} className="App-logo" alt="logo" />*/}
                    <h2>Tell us what you think about {issueId}.</h2>
                </div>
                <p className="App-intro">
                    Deep down, I really care what you think. Seriously.
                </p>
                <pre>/issue/{issueId}</pre>
            </div>
        );
    }
}

export default IssuePage;

