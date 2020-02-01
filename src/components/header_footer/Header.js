import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import SideDrawer from './SideDrawer';
export default class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            drawerOpen: false,
        }
    }
    toggleDrawer = (value) =>{
        this.setState({
            drawerOpen: value,
        })
    }
    render(){
        return(
            <AppBar
                position='fixed'
                style={{
                    backgroundColor:'#2f2f2f',
                    boxShadow: 'none',
                    padding: '10px 0'
                }}
            >
                <Toolbar>
                    <div className="header_logo">
                        <div className="font_righteous header_logo_venue">The Venue</div>
                        <div className="header_logo_title">Musical Events</div>
                    </div>

                    <IconButton
                        aria-label="Menu"
                        color="inherit"
                        onClick={()=>this.toggleDrawer(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <SideDrawer 
                        open = {this.state.drawerOpen}
                        onClose = {(value)=>this.toggleDrawer(value)}
                    />
                </Toolbar>
            </AppBar>
        )
    }
}