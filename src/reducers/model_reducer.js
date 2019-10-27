import { FETCHREQUEST_FAILE, FETCHREQUEST_SUCCESS, FETCH_REPOSITORY } from "../constants/constants";

const initialState = {
    repos: []
}

const responseHandler = (state = initialState, action) => {
    switch(action.type) {
        case FETCHREQUEST_SUCCESS:
            return Object.assign({}, state, {repos: action.payload});
        case FETCHREQUEST_FAILE:
            return Object.assign({}, state, {repos: action.payload});
        default:
            return state
    }
}

export default responseHandler;