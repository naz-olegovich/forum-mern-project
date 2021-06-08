const SET_TOPICS = "SET_TOPICS"
const SET_TOPIC_DETAILS = 'SET_TOPIC_DETAILS'
const CREATE_TOPIC = "CREATE_TOPIC"
const DELETE_TOPIC = 'DELETE_TOPIC'

const defaultState = {}

export default function topicReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_TOPICS:
            return { ...state, topics: action.payload }
        case SET_TOPIC_DETAILS:
            return { ...state, topicDetails: action.payload }
        case DELETE_TOPIC:
            return { ...state, topics: state.topics.filter((topic) => topic._id !== action.payload) };
        case CREATE_TOPIC:
            return { ...state, topics: [action.payload, ...state.topics] };
        default:
            return state
    }
}


export const setTopicsAction = topics => ({ type: SET_TOPICS, payload: topics })
export const setTopicDetailsAction = topic => ({ type: SET_TOPIC_DETAILS, payload: topic })
export const deleteTopicAction = id => ({ type: DELETE_TOPIC, payload: id })
export const createTopicAction = topic => ({ type: CREATE_TOPIC, payload: topic })
