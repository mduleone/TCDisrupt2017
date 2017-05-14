import React, {Component} from 'react';
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
    render() {
        const someSenators = [
            {
                "state": "nj",
                "name": "John Doe",
                "grade": 33.3,
                "party": "R"
            }, {
                "state": "nj",
                "name": "Mary Sew",
                "grade": 88.8,
                "party": "D"
            }, {
                "state": "nj",
                "name": "Tony Danza",
                "grade": 28.6,
                "party": "R"
            }
        ];

        const someIssues = [
            {
                "date": "2017-03-30",
                "issue": "HR-124",
                "question": "What if all the raindrops were gum drops and lemon drops?",
                "result": "Confirmed"
            }, {
                "date": "2017-03-30",
                "issue": "HR-224",
                "question": "What's the difference between a chicken?",
                "result": "Confirmed"
            }, {
                "date": "2017-03-30",
                "issue": "HR-324",
                "question": "In your opinion, how much does an orange?",
                "result": "Confirmed"
            }
        ];
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
                                    {someSenators.map( (rep) => {
                                        return (
                                            <TableRow key={rep.name} className={(rep.party === 'R') ? 'row-republican' : 'row-democrat'}>
                                                <TableRowColumn>{rep.state}</TableRowColumn>
                                                <TableRowColumn>{rep.name}</TableRowColumn>
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
                                    {someIssues.map( (issue) => {
                                        return (
                                            <Link key={issue.issue} to={`/issue/${issue.issue}`}>
                                                <TableRow>
                                                    <TableRowColumn>{issue.date}</TableRowColumn>
                                                    <TableRowColumn>{issue.issue}</TableRowColumn>
                                                    <TableRowColumn>{issue.question}</TableRowColumn>
                                                    <TableRowColumn>{issue.result}</TableRowColumn>
                                                </TableRow>
                                            </Link>
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

