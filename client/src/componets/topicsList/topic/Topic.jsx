import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {deleteTopic} from "../../../actions/topics";
import {Link} from "react-router-dom";
import clsx from 'clsx';
import {Card, CardHeader, CardContent, CardActions, Collapse, IconButton, Typography, Button} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DeleteIcon from '@material-ui/icons/Delete';
import useStyles from './styles'

const Topic = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [expanded, setExpanded] = useState(false);

    const { currentUser } = useSelector((state) => state.user);
    const isOwner = currentUser.topics.includes(props.topic._id) || currentUser.id === props.topic.user;


    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const formatDate = (date) => {
        const dateOfCreation = new Date(date);
        return `${dateOfCreation.toDateString()} at ${dateOfCreation.toLocaleTimeString().slice(0, -3)}`
    }


    return (
        <Card className={[classes.root, isOwner && classes.greenBackground].join(' ')}>
            <CardHeader
                title={<Link to={`/topic/${props.topic._id}`} >{props.topic.title} </Link>}
            subheader={`by ${props.topic.username}, ${formatDate(props.topic.created_at)}`}
            />
            <CardContent>
                <Typography variant="body2" color="textPrimary" component="p">
                    {props.topic.description}
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

                {isOwner &&
                <Button size="small" color="secondary"
                        onClick={() => dispatch(deleteTopic(props.topic._id))}>
                    <DeleteIcon fontSize="small"/> &nbsp; Delete
                </Button>}

            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>
                        Comment 1
                    </Typography>

                    <Typography paragraph>
                        Comment 2
                    </Typography>

                    <Typography paragraph>
                        Comment 2
                    </Typography>
                </CardContent>

            </Collapse>

        </Card>
    );
};

export default Topic;
