


export default (state = null,action) => {
   if(action.type ==='FETCH_USER'){
       console.log(action);
       return action.payload || false;
   }

   return state;
}