import { TEXT_CHANGE } from "../constants/constants";

const initialState = {
    searchText: ""
}

const bindTextChanged = (state = initialState, action) => {
    switch(action.type) {
        case TEXT_CHANGE:
            return Object.assign({}, state, {searchText: action.payload});
        default:
            return state
    }
}

export default bindTextChanged;