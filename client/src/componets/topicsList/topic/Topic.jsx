import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTopic } from '../../../actions/topics';
import { Link } from 'react-router-dom';
import {
    Card,
    Paper,
    Grid,
    CardHeader,
    CardContent,
    CardActions,
    Typography,
    Button
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import useStyles from './styles';

const Topic = (props) => {
    const { data: topic } = props;
    const classes = useStyles();
    const dispatch = useDispatch();
    const { currentUser } = useSelector((state) => state.user);
    const isOwner = currentUser.topics.includes(topic._id) || currentUser.id === topic.user;

    const handleDelete = () => {
        dispatch(deleteTopic(topic._id));
    };

    const formatDate = (date) => {
        const dateOfCreation = new Date(date);
        formatDate.getDate = () => dateOfCreation.toLocaleString().split(',')[0];
        formatDate.getTime = () => dateOfCreation.toLocaleTimeString().slice(0, -3);
        return formatDate;
    };

    // const openTopic = () => {
    //     history.push(`/topic/${topic._id}`)
    // }

    const lastComment = topic.comments.slice(-1)[0];


    return (
        <Card className={[classes.card, isOwner && classes.greenBackground].join(' ')}>
            <CardHeader
                title={<Link to={`/topic/${topic._id}`} className={classes.title}>{topic.title} </Link>}
                subheader={`by ${topic.username},
                 ${formatDate(topic.createdAt).getDate()} at  ${formatDate(topic.createdAt).getTime()}`}
                action={
                    <CardActions>
                        {isOwner &&
                        <Button size="small" color="secondary"
                            onClick={handleDelete}>
                            <DeleteIcon fontSize="small"/> &nbsp; Delete
                        </Button>}
                    </CardActions>
                }
            />

            <CardContent style={{ padding: '0px 25px' }}>
                <Typography variant="body2" color="textPrimary">
                    {topic.description}
                </Typography>
            </CardContent>

            <CardContent>
                <Typography variant='h6' color="textSecondary">
                    {topic.comments.length === 0 ? 'No comments yet' : 'Last comment:'}
                </Typography>
                {lastComment &&
                <div className={classes.commentsDiv}>
                    <Paper className={[classes.comment, isOwner && classes.greenBackground].join(' ')}
                        variant='outlined'>
                        <Grid container wrap="nowrap">
                            <Grid item xs={'auto'} style={{ marginRight: 15 }}>
                                <Typography style={{ fontWeight: 'bold' }}>{lastComment.username}</Typography>
                                <Typography variant="body2"
                                    color='secondary'>{formatDate(lastComment.createdAt).getDate()}</Typography>
                                <Typography variant="body2"
                                    color='secondary'> at {formatDate(lastComment.createdAt).getTime()}</Typography>
                            </Grid>
                            <Grid item xs >
                                <Typography variant='body1' className={classes.commentText}>
                                    {lastComment.text}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                </div>}
            </CardContent>
        </Card>
    );
};

export default Topic;
