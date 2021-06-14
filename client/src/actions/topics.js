import axios from 'axios';
import {
    setTopicsAction,
    setTopicDetailsAction,
    deleteTopicAction,
    createTopicAction,
    createCommentAction
} from '../reducers/topicReducer';
import { hideLoader, showLoader } from '../reducers/appReducer';

export const getTopics = () => async (dispatch) => {
    try {
        dispatch(showLoader());
        const { data } = await axios.get('api/topics');
        dispatch(setTopicsAction(data));
    } catch (e) {
        alert(e);
    } finally {
        dispatch(hideLoader());
    }
};

export const getTopicById = (id) => async (dispatch) => {
    try {
        dispatch(showLoader());
        const response = await axios.get(`/api/topics/${id}`);
        dispatch(setTopicDetailsAction(response.data));
    } catch (e) {
        alert(e);
    } finally {
        dispatch(hideLoader());
    }
};


export const createTopic = (form) => async (dispatch) => {
    try {
        dispatch(showLoader());
        const { title, description, text } = form;
        const response = await axios.post('/api/topics/',
            {
                title,
                description,
                text
            });
        dispatch(createTopicAction(response.data));
    } catch (e) {
        alert(e);
    } finally {
        dispatch(hideLoader());
    }
};


export const deleteTopic = (id) => async (dispatch) => {
    try {
        await axios.delete(`/api/topics/${id}`);
        dispatch(deleteTopicAction(id));
    } catch (e) {
        alert(e);
    }
};

export const createComment = (topicId, form) => async (dispatch) => {
    try {
        dispatch(showLoader());
        const { text } = form;
        const response = await axios.post(`/api/comments/add/${topicId}`,
            { text });
        dispatch(createCommentAction(response.data));
    } catch (e) {
        alert(e);
    } finally {
        dispatch(hideLoader());
    }
};
