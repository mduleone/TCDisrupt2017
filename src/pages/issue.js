import React, {Component} from 'react';

// import logo from '../images/logo.svg';
import './styles/issue.css';

class IssuePage extends Component {
    render() {
        const someIssues = [
            {
                "date": "2017-03-30",
                "issue": "HR-124",
                "question": "If all the raindrops were gum drops and lemon drops, oh what a world that would be!",
                "result": "Confirmed"
            }, {
                "date": "2017-03-30",
                "issue": "HR-224",
                "question": "If all the raindrops were gum drops and lemon drops, oh what a world that would be!",
                "result": "Confirmed"
            }, {
                "date": "2017-03-30",
                "issue": "HR-324",
                "question": "If all the raindrops were gum drops and lemon drops, oh what a world that would be!",
                "result": "Confirmed"
            }
        ];

        const issueId = this.props.match.params.issueId;

        let thisIssue = someIssues.filter((issue) => (issue.issue == issueId))[0];
        return (
            <div className="App">
                <div className="App-header">
                    {/*<img src={logo} className="App-logo" alt="logo" />*/}
                    <h2>Tell us what you think about {issueId}.</h2>
                </div>
                <p className="App-intro">
                    {thisIssue.question}
                </p>
                <pre>/issue/{issueId}</pre>
            </div>
        );
    }
}

export default IssuePage;

