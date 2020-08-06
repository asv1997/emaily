
export default (state=[],action) => {
    if(action.type === 'FETCH_SURVEYS'){
        return action.payload;
    }

    return state;
}