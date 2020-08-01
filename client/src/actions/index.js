import axios from 'axios'

export const fetchUser = () => {
    return async (dispatch) => {
        const response = await axios.get('/api/current_user');
       
        dispatch({type:'FETCH_USER', payload: response.data})
    }
}

export const handleToken = (token) => {
    return async(dispatch) => {
        const response = await axios.post('/api/stripe', token);

        dispatch({type:'FETCH_USER', payload: response.data}) //we are reusing the action type
    }
}

