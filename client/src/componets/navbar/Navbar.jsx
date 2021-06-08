import React from 'react';
import {AppBar, Toolbar, Button, Typography} from '@material-ui/core';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {logout} from "../../reducers/userReducer";
import useStyles from './style';


const Navbar = () => {
    const classes = useStyles();
    const isAuth = useSelector(state => state.user.isAuth)
    const dispatch = useDispatch()
    return (
        <AppBar position='sticky'>
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    Forum App
                </Typography>
                {isAuth ?
                    <Button className={classes.btn} onClick={() => dispatch(logout())} color="inherit">Log Out</Button>
                    :
                    <Button className={classes.btn} component={Link} to="/login" variant="contained"
                            color="primary">Sign In</Button>
                }

            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
