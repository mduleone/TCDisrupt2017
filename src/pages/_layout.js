import React, {Component} from "react";
import {Link} from "react-router-dom";
import AppBar from "material-ui/AppBar";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";

import CommonStyles from './_common-styles';

export default class Layout extends Component {

    state = {
        open: false
    };

    closeMenu = () => this.setState({ open: false });

    toggleMenu = () => this.setState(prevState => ({ open: !prevState.open }));

    render() {
        return (
            <div id="app-container">
                <CommonStyles />
                <AppBar title="Pierce The Veil"
                        onLeftIconButtonTouchTap={this.toggleMenu} />
                <Drawer className="nav-bar"
                        docked={false}
                        width={200}
                        open={this.state.open}
                        onRequestChange={open => this.setState({open})}>
                    <Link to="/" onClick={this.closeMenu}>
                        <MenuItem>Home</MenuItem>
                    </Link>
                    <Link to="/senate" onClick={this.closeMenu}>
                        <MenuItem>Senate</MenuItem>
                    </Link>
                    <Link to="/house" onClick={this.closeMenu}>
                        <MenuItem>House of Representatives</MenuItem>
                    </Link>
                    <Link to="/state/nj" onClick={this.closeMenu}>
                        <MenuItem>NJ Legislature</MenuItem>
                    </Link>
                    <Link to="/about" onClick={this.closeMenu}>
                        <MenuItem>About Us</MenuItem>
                    </Link>
                </Drawer>
                <div id="app-content">
                    {this.props.children}
                </div>
            </div>
        );
    }
}
