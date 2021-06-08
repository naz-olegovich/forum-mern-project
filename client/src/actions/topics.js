import axios from "axios";
import {setTopicsAction,setTopicDetailsAction ,deleteTopicAction, createTopicAction} from "../reducers/topicReducer";
import {hideLoader, showLoader} from "../reducers/appReducer";

export const getTopics = () => {
    return async (dispatch) => {
        try {
            dispatch(showLoader())
            const response = await axios.get(`http://localhost:5000/api/topics/`)
            dispatch(setTopicsAction(response.data))
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


export const createTopic = (form) => {
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
