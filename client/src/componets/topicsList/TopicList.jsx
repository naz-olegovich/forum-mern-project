import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './styles';

import Topic from './topic/Topic';
import { getTopics } from '../../actions/topics';
import NewTopicForm from './NewTopicForm';
import Paginate from '../utils/pagination/Pagination';


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

            {/*<Grid container direction="column" alignItems="center" justify="flex-start">*/}
            {/*    {topics?.map((topic) => (<Topic key={topic._id} topic={topic}/>))}*/}
            {/*</Grid>*/}

            <Paginate
                data={topics}
                RenderComponent={Topic}
                dataLimit={2}
            />


        </div>
    );
};

export default TopicList;
