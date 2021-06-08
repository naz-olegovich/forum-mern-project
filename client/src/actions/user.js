import axios from "axios";
import {setUser} from "../reducers/userReducer";
import {hideLoader, showLoader} from "../reducers/appReducer";


export const registration = (formData) => {
    return async dispatch => {
        const { username, email, password } = formData
        try {
            const response = await axios.post('http://localhost:5000/api/auth/registration', {
                username,
                email,
                password,
            })

            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)
        } catch (e) {
            const errors = e?.response?.data?.errors?.errors
            let message = e.response.data.message + '\n'
            if (errors) {
                errors.forEach(error => {
                    message += error.msg + '\n'
                })
            }
            alert(message)
        }
    }
}

export const login = (formData) => {
    return async dispatch => {
        const { email, password } = formData
        try {
            const response = await axios.post(`http://localhost:5000/api/auth/login`, {
                email,
                password
            })
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)
        } catch (e) {
            alert(e)
        }
    }
}

export const auth = () => {
    return async dispatch => {
        try {
            dispatch(showLoader())
            const response = await axios.get(`http://localhost:5000/api/auth/auth`,
                { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
            )
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)
        } catch (e) {
            localStorage.removeItem('token')
        }finally {
            dispatch(hideLoader())
        }
    }
}