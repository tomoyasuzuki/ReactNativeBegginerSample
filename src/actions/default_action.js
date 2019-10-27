import {DEFAULT_HEADER} from '..constants/constants';

const setDefaultHeaderValue = text => {
    return {type: DEFAULT_HEADER, payload: {text: text}}
}

export default setDefaultHeaderValue