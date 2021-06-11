import axios from "axios";
import {
    setTopicsAction,
    setTopicDetailsAction,
    deleteTopicAction,
    createTopicAction,
    createCommentAction
} from "../reducers/topicReducer";
import {hideLoader, showLoader} from "../reducers/appReducer";



export const getTopics = () => {
    return async (dispatch) => {
        try {
            dispatch(showLoader())
            const { data }  = await axios.get(`http://localhost:5000/api/topics`)
            dispatch(setTopicsAction(data));
        } catch (e) {
            alert(e)
        } finally {
            dispatch(hideLoader())
        }
    }
}

export const getTopicById = (id) => {
    return async (dispatch) => {
        try {
            dispatch(showLoader())
            const response = await axios.get(`http://localhost:5000/api/topics/${id}`,
                { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
            dispatch(setTopicDetailsAction(response.data))
        } catch (e) {
            alert(e)
        } finally {
            dispatch(hideLoader())
        }
    }
}


export const createTopic = (form, lastPage) => {
    return async (dispatch) => {
        try {
            const { title, description, text } = form;
            const response = await axios.post(`http://localhost:5000/api/topics/`,
                {
                    title,
                    description,
                    text
                },
                {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
                })
            dispatch(createTopicAction(response.data))
        } catch (e) {
            alert(e)
        }
    }
}


export const deleteTopic = (id) => {
    return async (dispatch) => {
        try {
            await axios.delete(`http://localhost:5000/api/topics/${id}`,
                { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
            dispatch(deleteTopicAction(id))
        } catch (e) {
            alert(e)
        }
    }
}

export const createComment = (topicId, form) => {
    return async (dispatch) => {
        try {
            const { text } = form;
            const response = await axios.post(`http://localhost:5000/api/comments/add/${topicId}`,
                { text },
                {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
                })
            dispatch(createCommentAction(response.data))
        } catch (e) {
            alert(e)
        }
    }
}
