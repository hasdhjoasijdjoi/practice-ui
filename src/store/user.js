
import axios from "axios";

const GET_USER = 'user/GETUSER';


const getUser = () => {
    const request = axios.get('/api/users/').then(response => {console.log(response.data)});
    console.log(request);
    return {  // action객체 
        type: GET_USER,
        payload: request,
    }
}

const user = (state = { payload: "3"}, action) => {  // dispatch를 통해 reducer로 온다. 
    switch (action.type) {
        case GET_USER:
            return {payload: action.payload} // user 
            break;
        default:
            return state;
    }
}


export { getUser }
export default user 