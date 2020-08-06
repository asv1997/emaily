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

export const submitSurvey = (values,history) => {
    return async(dispatch) => {
        const response = await axios.post('/api/surveys',values);
        history.push('/surveys');
        dispatch({type:'FETCH_USER', payload: response.data})
    }
};


export const fetchSurveys = () => {
    return async(dispatch) => {
        const response = await axios.get('/api/surveys');
        dispatch({type:'FETCH_SURVEYS', payload: response.data})
    }
}
