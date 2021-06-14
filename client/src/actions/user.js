import axios from 'axios';
import { setUserAction, logoutAction } from '../reducers/userReducer';
import { hideLoader, showLoader } from '../reducers/appReducer';


export const registration = (formData) => async (dispatch) => {
    const { username, email, password } = formData;
    try {
        const response = await axios.post('api/auth/registration', {
            username,
            email,
            password,
        });

        dispatch(setUserAction(response.data.user));
    } catch (e) {
        const errors = e?.response?.data?.errors?.errors;
        let message = e.response.data.message + '\n';
        if (errors) {
            errors.forEach((error) => {
                message += error.msg + '\n';
            });
        }
        alert(message);
    }
};

export const login = (formData) => async (dispatch) => {
    const { email, password } = formData;
    try {
        const response = await axios.post('/api/auth/login', {
            email,
            password
        });
        dispatch(setUserAction(response.data.user));
    } catch (e) {
        alert(e.response.data.message);
    }
};

export const auth = () => async (dispatch) => {
    try {
        dispatch(showLoader());
        const { data } = await axios.get('/api/auth/auth');
        dispatch(setUserAction(data.user));

    } catch (e) {
        console.log(e);
    } finally {
        dispatch(hideLoader());
    }
};

export const logout = () => async (dispatch) => {
    try {
        dispatch(showLoader());
        await axios.post('/api/auth/logout');
        dispatch(logoutAction());
    } catch (e) {
        console.log(e);
    } finally {
        dispatch(hideLoader());
    }
};
