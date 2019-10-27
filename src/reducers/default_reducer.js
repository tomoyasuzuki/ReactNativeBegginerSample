import {DEFAULT_HEADER} from '../constants/constants';

const initialState = {
    text: ""
}

const setDefaultValue = (state = initialState, action) => {
    switch(action.type) {
        case DEFAULT_HEADER:
            return Object.assign({}, state, {text: action.payload})
        default:
            return state
    }
}


export default setDefaultValue;