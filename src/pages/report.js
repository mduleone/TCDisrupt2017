import React, {Component} from 'react';
import {get} from '../api/common';

// import logo from '../images/logo.svg';
import './styles/report.css';

class ReportPage extends Component {
    componentDidMount() {
        get('http://localhost:3001/api/senate/somebody/reportcard')
            .then(data => this.setState({data}));
    }

    render() {
        const data = this.state && this.state.data;
        const params = this.props.match.params;
        const article = params.legislator.match(/^[aeiouAEIOU]/) ? 'an' : 'a';

        return (
            <div>
                <div className="App-header">
                    <h2 className="u-text-center">New Jersey / Senator</h2>
                </div>
                <div>
                    <div style={{width: '50%', display: 'inline-block', margin: 0, padding: '15px', verticalAlign: 'top'}}>
                        <h2>{data && data.representative.displayName}</h2>
                        <h3>United States Senator</h3>
                        <img src="https://2016.alamidwinter.org/sites/default/files/styles/medium/public/speaker/cory_booker_220x220.jpg?itok=emvmFBIs" style={{height: '200px', width: '200px'}} alt="logo" />
                    </div>
                    <div style={{width: '50%', display: 'inline-block', margin: 0, padding: '15px', verticalAlign: 'top'}}>
                        <h2>Scored: {data && data.representative.grade}</h2>
                        <h3>Total Votes: {data && data.meta.totalVotes}</h3>
                        <h3>Agree / Disagree: {data && data.meta.numAgree} / {data && data.meta.numDisagree}</h3>
                    </div>
                </div>
                <div>
                    <div style={{width: '50%', display: 'inline-block', margin: 0, padding: '15px', verticalAlign: 'top'}}>
                        <h3>Start of Tenure: {data && data.representative.tenureStartDate}</h3>
                    </div>
                    <div style={{width: '50%', display: 'inline-block', margin: 0, padding: '15px', verticalAlign: 'top'}}>
                        <h3>Next Election: {data && data.representative.nextElectionDate}</h3>
                    </div>
                </div>
                <div>
                    <h3>
                        Votes
                        <div>
                            <table>
                                <thead>
                                <tr>
                                    <th>
                                        Date
                                    </th>
                                    <th>
                                        Issue
                                    </th>
                                    <th>
                                        Topic
                                    </th>
                                    <th>
                                        Them
                                    </th>
                                    <th>
                                        You
                                    </th>
                                    <th>
                                        Weight
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                {data && data.issueVoteReactions.map((reaction, id) => {
                                    return (
                                        <tr key={id}>
                                            <td style={{minWidth: '100px'}}>
                                                May 11
                                            </td>
                                            <td>
                                                PN42
                                            </td>
                                            <td style={{overflow: 'hidden', textOverflow: 'ellisis', whiteSpace: 'nowrap', maxWidth: '100px'}}>
                                                {reaction.issue.question}
                                            </td>
                                            <td style={{overflow: 'hidden', textOverflow: 'ellisis', whiteSpace: 'nowrap'}}>
                                                {reaction.repVote.vote}
                                            </td>
                                            <td style={{overflow: 'hidden', textOverflow: 'ellisis', whiteSpace: 'nowrap'}}>
                                                {reaction.userReation.vote ? 'Yay' : 'Nay'}
                                            </td>
                                            <td style={{overflow: 'hidden', textOverflow: 'ellisis', whiteSpace: 'nowrap'}}>
                                                {reaction.userReation.importance}
                                            </td>
                                        </tr>
                                    );
                                })}
                                </tbody>
                            </table>
                        </div>
                    </h3>
                </div>
            </div>
        );
    }
}

export default ReportPage;

