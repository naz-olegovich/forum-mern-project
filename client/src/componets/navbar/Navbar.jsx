import React from 'react';
import { AppBar, Button, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../actions/user';
import useStyles from './style';


const Navbar = () => {
    const classes = useStyles();
    const { isAuth, currentUser } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    return (
        <AppBar position='relative' className={classes.appBar}>
            <div className={classes.logo}>
                <div className={classes.logo}>
                    <Typography component={Link} to="/" variant="h6" className={classes.title}>
                        Forum App
                    </Typography>
                </div>
                <div className={classes.menuBar}>
                    {isAuth ?
                        <>
                            <Typography className={classes.username}>{currentUser.username}</Typography>
                            <Button className={classes.btn} onClick={() => dispatch(logout())}>
                                Log Out</Button>
                        </> :
                        <Button className={classes.btn} component={Link} to="/login">
                            Sign In</Button>
                    }
                </div>
            </div>

        </AppBar>
    );
};

export default Navbar;
