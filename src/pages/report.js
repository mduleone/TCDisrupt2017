import React, {Component} from 'react';

// import logo from '../images/logo.svg';
import './styles/report.css';

class ReportPage extends Component {
    render() {
        console.log(this.props.match);
        const params = this.props.match.params;
        const article = params.legislator.match(/^[aeiouAEIOU]/) ? 'an' : 'a';
        return (
            <div className="App">
                <div className="App-header">
                    {/*<img src={logo} className="App-logo" alt="logo" />*/}
                    <h2>I'm a report card.</h2>
                </div>
                <p className="App-intro">
                    Your legislator is (most likely) {article} {params.legislator}.
                </p>
                <pre>/report/{params.legislator}</pre>
            </div>
        );
    }
}

export default ReportPage;

