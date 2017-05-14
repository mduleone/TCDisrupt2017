import React, {Component} from 'react';
import PropTypes from 'prop-types';
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
import {Link} from 'react-router-dom';

// import logo from '../images/logo.svg';
import './styles/senate.css';

class SenatePage extends Component {
    componentDidMount() {
        get('http://localhost:3001/api/senate?userId=1234')
            .then(reps => {
                console.log(reps);
                this.setState({reps});
            });
        get('http://localhost:3001/api/senate/issues?userId=1234')
            .then(issues => {
                console.log(issues);
                this.setState({issues});
            });
    }

    static contextTypes = {
        router: PropTypes.object,
    };

    render() {
        const reps = (this.state && this.state.reps) ? this.state.reps : [];
        console.log('reps', reps);

        const issues = (this.state && this.state.issues) ? this.state.issues: [];
        console.log('issues', issues);

        return (
            <div className="App">
                <div className="App-header">
                    {/*<img src={logo} className="App-logo" alt="logo" />*/}
                    <h2>It's the Senate page!</h2>
                </div>
                <Tabs>
                    <Tab label="Senators">
                        <div>
                            <Table selectable={false}>
                                <TableHeader displaySelectAll={false}>
                                    <TableRow>
                                        <TableHeaderColumn>State</TableHeaderColumn>
                                        <TableHeaderColumn>Name</TableHeaderColumn>
                                        <TableHeaderColumn>Grade</TableHeaderColumn>
                                    </TableRow>
                                </TableHeader>
                                <TableBody displayRowCheckbox={false}>
                                    {reps.map( (rep) => {
                                        return (
                                            <TableRow key={rep.id} className={(rep.party === 'Republican') ? 'row-republican' : 'row-democrat'}>
                                                <TableRowColumn>{rep.state}</TableRowColumn>
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
                                                <TableRowColumn><Link className="u-full-width" to={`/issue/senate/${issue.id}`}>{issue.voteDate}</Link></TableRowColumn>
                                                <TableRowColumn><Link className="u-full-width" to={`/issue/senate/${issue.id}`}>{issue.id}</Link></TableRowColumn>
                                                <TableRowColumn><Link className="u-full-width" to={`/issue/senate/${issue.id}`}>{issue.question}</Link></TableRowColumn>
                                                <TableRowColumn><Link className="u-full-width" to={`/issue/senate/${issue.id}`}>{issue.result}</Link></TableRowColumn>
                                            </TableRow>
                                        );
                                    })}
                                </TableBody>
                            </Table>                        </div>
                    </Tab>
                </Tabs>
                {/*<p className="App-intro">*/}
                {/*This is page is all about the senate.*/}
                {/*</p>*/}
                <pre>/senate</pre>
            </div>
        );
    }
}

export default SenatePage;

