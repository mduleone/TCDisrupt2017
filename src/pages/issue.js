import React, {Component} from 'react';
import {get} from '../api/common';

// import logo from '../images/logo.svg';
import './styles/issue.css';

class IssuePage extends Component {
    componentDidMount() {
        // console.log('props', this.props);
        const chamber = this.props.match.params.chamber;

        get('http://localhost:3001/api/'  + chamber + '/issues?userId=1234')
            .then(issues => {
                console.log(issues);
                this.setState({issues});
            });
    }

    render() {

        const issues = (this.state && this.state.issues) ? this.state.issues: [];
        console.log('issues', issues);

        const issueId = this.props.match.params.issueId;

        let thisIssue = issues.filter((issue) => (issue.id === issueId))[0];

        if (!thisIssue) {
            return (
                <div></div>
            );
        }
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

