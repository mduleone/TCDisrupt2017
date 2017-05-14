import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {get} from '../api/common';
import {Tabs, Tab} from 'material-ui/Tabs'
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';

// import logo from '../images/logo.svg';
import './styles/house.css';

// const styles = {
//     headline: {
//         fontSize: 24,
//         paddingTop: 16,
//         marginBottom: 12,
//         fontWeight: 400,
//     },
// };
//
// function handleActive(tab) {
//     alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
// }


class HousePage extends Component {
    componentDidMount() {
        get('http://localhost:3001/api/house?userId=1234')
            .then(reps => {
                console.log(reps);
                this.setState({reps});
            });
        get('http://localhost:3001/api/house/issues?userId=1234')
            .then(issues => {
                console.log(issues);
                this.setState({issues});
            });
    }

    render() {
        const reps = (this.state && this.state.reps) ? this.state.reps : [];
        console.log('reps', reps);

        const issues = (this.state && this.state.issues) ? this.state.issues: [];
        console.log('issues', issues);

        return (
            <div className="App">

                <div className="App-header">
                    {/*<img src={logo} className="App-logo" alt="logo" />*/}
                    <h2>It's the House of Representatives' page!</h2>
                </div>
                <p className="App-intro">
                    This is page is all about the House of Reps.
                </p>
                <Tabs>
                    <Tab label="Representatives">
                        <div>
                            <Table selectable={false}>
                                <TableHeader displaySelectAll={false}>
                                    <TableRow>
                                        <TableHeaderColumn>State</TableHeaderColumn>
                                        <TableHeaderColumn>District</TableHeaderColumn>
                                        <TableHeaderColumn>Name</TableHeaderColumn>
                                        <TableHeaderColumn>Grade</TableHeaderColumn>
                                    </TableRow>
                                </TableHeader>
                                <TableBody displayRowCheckbox={false}>
                                    {reps.map( (rep) => {
                                        return (
                                            <TableRow key={rep.id} className={(rep.party === 'Republican') ? 'row-republican' : 'row-democrat'}>
                                                <TableRowColumn>{rep.state}</TableRowColumn>
                                                <TableRowColumn>{rep.district}</TableRowColumn>
                                                <TableRowColumn>{rep.displayName}</TableRowColumn>
                                                <TableRowColumn>{rep.grade}</TableRowColumn>
                                            </TableRow>
                                        );
                                    })}
                                </TableBody>
                            </Table>
                        </div>
                    </Tab>
                    <Tab label="Issues">
                        <div>
                            <Table selectable={false}>
                                <TableHeader displaySelectAll={false}>
                                    <TableRow>
                                        <TableHeaderColumn>Date</TableHeaderColumn>
                                        <TableHeaderColumn>Issue</TableHeaderColumn>
                                        <TableHeaderColumn>Question</TableHeaderColumn>
                                        <TableHeaderColumn>Result</TableHeaderColumn>
                                    </TableRow>
                                </TableHeader>
                                <TableBody displayRowCheckbox={false}>
                                    {issues.map( (issue) => {
                                        return (
                                            <TableRow key={issue.id}>
                                                <TableRowColumn><Link className="u-full-width" to={`/issue/${issue.issue}`}>{issue.voteDate}</Link></TableRowColumn>
                                                <TableRowColumn><Link className="u-full-width" to={`/issue/${issue.issue}`}>{issue.id}</Link></TableRowColumn>
                                                <TableRowColumn><Link className="u-full-width" to={`/issue/${issue.issue}`}>{issue.question}</Link></TableRowColumn>
                                                <TableRowColumn><Link className="u-full-width" to={`/issue/${issue.issue}`}>{issue.result}</Link></TableRowColumn>
                                            </TableRow>
                                        );
                                    })}
                                </TableBody>
                            </Table>
                        </div>
                    </Tab>
                </Tabs>
                <pre>/house</pre>
            </div>
        );
    }
}

export default HousePage;
