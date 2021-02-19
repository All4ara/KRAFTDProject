
import React, { useState, useEffect } from 'react';
import { Link, useHistory, useLocation } from "react-router-dom";
import { AppBar, Button, Toolbar, Typography, Avatar } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import useStyles from './styles';
import logo from '../../images/Crafted.png';

const Navbar = () => {
    const classes = useStyles();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    const logout = () => {
        dispatch({ type: 'LOGOUT' })

        history.push('/')

        setUser(null);
    } 

    useEffect(() => {
        const token = user?.token;

        // JWT  
        if(token) {
            const decodedToken = decode(token)

            if(decodedToken.exp * 1000 < new Date().getTime()) logout();
        }

        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

    return (
        <AppBar className={classes.appBar} position="fixed" color="inherit">
        <div className={classes.brandContainer}>
            <Typography component={Link} to="/" className={classes.heading} variant="h4" align="center">KRAFTD</Typography>
            {/* <img className={classes.image} src={logo} alt="memories" height="60" align="center"/> */}
        </div>
        <Toolbar className={classes.toolbar}>
            {user ? (
                <div className={classes.profile}>
                    <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                    {/* <Typography className={classes.userName} variant="h6">{user.result.name}</Typography> */}
                    <Button varient="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
                </div>
            ) : (
                <Button component={Link} to="/auth" variant="contained" color="primary">Login</Button>
            )}
        </Toolbar>
        </AppBar>
    );
};

export default Navbar;