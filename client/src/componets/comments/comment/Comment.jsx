import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import useStyles from './styles';


const Comment = (props) => {
    const { data: comment } = props;
    const classes = useStyles();
    const formatDate = (date) => {
        const dateOfCreation = new Date(date);
        return `${dateOfCreation.toLocaleString().split(',')[0]} at ${dateOfCreation.toLocaleTimeString().slice(0, -3)}`;
    };


    return (
        <Paper className={classes.comments} elevation={1} variant='outlined'>
            <Grid container wrap="nowrap" spacing={2}>
                <Grid justifycontent="left" item xs zeroMinWidth>
                    <div className={classes.inline}>
                        <Typography style={{ fontWeight: 'bold' }} className={classes.username}>
                            {comment.username}
                        </Typography>
                        <Typography variant='body2' className={classes.date}>
                            {formatDate(comment.createdAt)}
                        </Typography>
                    </div>
                    <Typography variant='body1' className={classes.text}>
                        {comment.text}
                    </Typography>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default Comment;
