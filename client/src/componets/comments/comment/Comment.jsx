import React from 'react';
import {Grid, Paper} from "@material-ui/core";
import useStyles from './styles';


const Comment = (props) => {
    const {data: comment } = props
    const classes = useStyles();
    const formatDate = (date) => {
        const dateOfCreation = new Date(date);
        return `${dateOfCreation.toDateString()} at ${dateOfCreation.toLocaleTimeString().slice(0, -3)}`
    }

    return (
        <Paper className={classes.paper} elevation={15}>
            <Grid container wrap="nowrap" spacing={2}>
                {/*<Grid item>*/}
                {/*    <Avatar alt="Remy Sharp" src={imgLink} />*/}
                {/*</Grid>*/}
                <Grid justifyContent="left" item xs zeroMinWidth>
                    <div className={classes.inline}>
                        <h4 className={classes.username}>{comment.username}</h4>
                        <p className={classes.date}>
                            {formatDate(comment.createdAt)}
                        </p>
                    </div>

                    <p className={classes.text}>
                        {comment.text}
                    </p>

                </Grid>
            </Grid>
        </Paper>
    );
};

export default Comment;
