
import React from 'react';
import { Link } from "react-router-dom";
import { AppBar, Button, Toolbar, Typography, Avatar } from '@material-ui/core';


import useStyles from './styles';
import logo from '../../images/Crafted.png';

const Navbar = () => {
    const classes = useStyles();

    const user = null;

    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
        <div className={classes.brandContainer}>
            <Typography component={Link} to="/" className={classes.heading} variant="h4" align="center">KRAFTS</Typography>
            {/* <img className={classes.image} src={logo} alt="memories" height="60" align="center"/> */}
        </div>
        <Toolbar className={classes.toolbar}>
            {user ? (
                <div className={classes.profile}>
                    <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                    <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                    <Button varient="contained" className={classes.logout} color="secondary">Logout</Button>
                </div>
            ) : (
                <Button component={Link} to="/auth" variant="contained" color="primary">Login</Button>
            )}
        </Toolbar>
        </AppBar>
    );
};

export default Navbar;