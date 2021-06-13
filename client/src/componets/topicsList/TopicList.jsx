import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import useStyles from './styles';

import Topic from './topic/Topic';
import {getTopics} from '../../actions/topics';
import NewTopicForm from './NewTopicForm';
import Paginate from '../utils/pagination/Pagination';
import {Typography} from "@material-ui/core";


const TopicList = () => {
    const classes = useStyles();
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getTopics());
    }, [dispatch]);

    const { topics } = useSelector((state) => state.topics);


    return (
        <div className={classes.root}>
            <NewTopicForm/>
            {topics.length ?
                <Paginate
                    data={topics}
                    RenderComponent={Topic}
                    dataLimit={10}
                />
                :
                <Typography className={classes.title} variant='h4'>
                    There are no topics
                </Typography>}
        </div>
    );
};

export default TopicList;
