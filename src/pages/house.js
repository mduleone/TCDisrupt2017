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
        get('http://localhost:3001/api/house')
            .then(data => {
                console.log(data);
                this.setState({data});
            });
    }

    render() {
        const someCongressors = [
            {
                "id": "1",
                "state": "NJ",
                "district": 3,
                "displayName": "John Doe",
                "grade": 33.3,
                "party": "Republican"
            }, {
                "id": "2",
                "state": "NJ",
                "district": 5,
                "displayName": "Mary Sew",
                "grade": 88.8,
                "party": "Democrat"
            }, {
                "id": "3",
                "state": "NJ",
                "district": 9,
                "displayName": "Tony Danza",
                "grade": 28.6,
                "party": "Republican"
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
                                    {someCongressors.map( (rep) => {
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
                                    {someIssues.map( (issue) => {
                                        return (
                                            <TableRow key={issue.issue}>
                                                <TableRowColumn><Link className="u-full-width" to={`/issue/${issue.issue}`}>{issue.date}</Link></TableRowColumn>
                                                <TableRowColumn><Link className="u-full-width" to={`/issue/${issue.issue}`}>{issue.issue}</Link></TableRowColumn>
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
