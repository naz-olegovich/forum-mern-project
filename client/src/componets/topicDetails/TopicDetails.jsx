import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';

import {getTopicById} from '../../actions/topics';
import useStyles from './styles';
import {Paper, Typography, Container, Divider, LinearProgress} from '@material-ui/core';
import Comments from '../comments/Coments';

const TopicDetails = () => {
    const { topicDetails: topic } = useSelector((state) => state.topics);
    const loader = useSelector((state) => state.app.loader);
    const dispatch = useDispatch();
    const classes = useStyles();
    const { id } = useParams();

    useEffect(() => {
        dispatch(getTopicById(id));
    }, [id, dispatch]);

    const formatDate = (date) => {
        const dateOfCreation = new Date(date);
        return `${dateOfCreation.toDateString()} at ${dateOfCreation.toLocaleTimeString().slice(0, -3)}`;
    };

    if (loader) {
        return (
            <LinearProgress color="secondary"/>
        );
    }

    if (!topic) return null;

    return (
        <Container component="main">
            <Paper className={classes.paper} elevation={6}>
                <div className={classes.card}>
                    <div className={classes.section}>
                        <Typography variant="h3" component="h2">{topic.title}</Typography>
                        {topic.description &&
                        <Typography gutterBottom variant="subtitle1" component="p">
                            <i>Description:</i> {topic.description}
                        </Typography>
                        }

                        <Typography gutterBottom variant="subtitle1" component="p">
                            <i>Created by:</i>&nbsp; {topic.username}
                        </Typography>
                        <Typography gutterBottom variant="subtitle1" component="p">
                            <i>Created at:</i>&ensp; {formatDate(topic.createdAt)}
                        </Typography>
                        <Divider style={{ margin: '15px 0px' }}/>

                        {topic.text &&
                        <Typography variant="body1">
                            <div dangerouslySetInnerHTML={{ __html: topic.text }}/>
                        </Typography>}
                        <Divider style={{ margin: '20px 0' }}/>
                        


                        <Comments comments={topic.comments} topicId={id}/>
                        <Divider style={{ margin: '20px 0' }}/>
                    </div>
                </div>
            </Paper>
        </Container>
    );
};

export default TopicDetails;
