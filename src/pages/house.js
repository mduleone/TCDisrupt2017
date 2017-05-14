import React, {Component} from 'react';
import {Link} from 'react-router-dom';
// import {Tabs, Tab} from 'material-ui/Tabs'
// import {
//     Table,
//     TableBody,
//     TableHeader,
//     TableHeaderColumn,
//     TableRow,
//     TableRowColumn,
// } from 'material-ui/Table';

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
    render() {



        return (
            <div className="App">

                <div className="App-header">
                    {/*<img src={logo} className="App-logo" alt="logo" />*/}
                    <h2>It's the House of Representatives' page!</h2>
                </div>
                <p className="App-intro">
                    This is page is all about the House of Reps.
                </p>
                <p>
                    Good work. Now, check out the <Link to="/senate">Senate's page</Link>.
                </p>
                <pre>/house</pre>
            </div>
        );
    }
}

export default HousePage;
