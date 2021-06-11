import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {deleteTopic} from "../../../actions/topics";
import {Link} from "react-router-dom";
import clsx from 'clsx';
import {Card, CardHeader, CardContent, CardActions, Collapse, IconButton, Typography, Button} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DeleteIcon from '@material-ui/icons/Delete';
import useStyles from './styles'
import Comment from "../../comments/comment/Comment";

const Topic = (props) => {
    const { data: topic } = props
    const classes = useStyles();
    const dispatch = useDispatch();
    const [expanded, setExpanded] = useState(false);
    const { currentUser } = useSelector((state) => state.user);
    const isOwner = currentUser.topics.includes(topic._id) || currentUser.id === topic.user;


    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const handleDelete = (e) => {
        dispatch(deleteTopic(topic._id))
    };

    const formatDate = (date) => {
        const dateOfCreation = new Date(date);
        return `${dateOfCreation.toDateString()} at ${dateOfCreation.toLocaleTimeString().slice(0, -3)}`
    }

    const getLast2Comments = (commentsList) => commentsList.slice(-2).reverse();


    return (
        <Card className={[classes.root, isOwner && classes.greenBackground].join(' ')}>
            <CardHeader
                title={<Link to={`/topic/${topic._id}`}>{topic.title} </Link>}
                subheader={`by ${topic.username}, ${formatDate(topic.createdAt)}`}
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

            <CardContent>
                <Typography variant="body2" color="textPrimary" component="p">
                    {topic.description}
                </Typography>
            </CardContent>

            <CardActions>
                <IconButton
                    className={classes.commentsBtn}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more">
                    <Typography>Comments</Typography>
                    <ExpandMoreIcon className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}/>
                </IconButton>


            </CardActions>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent className={classes.comments}>
                    {getLast2Comments(topic.comments).map((comment) => (
                        <Comment key={comment._id} data={comment}/>))}
                </CardContent>
            </Collapse>

        </Card>
    );
};

export default Topic;
