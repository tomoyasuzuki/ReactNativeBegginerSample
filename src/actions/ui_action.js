import {TEXT_CHANGE} from '../constants/constants';

export const bindTextChangedAction = text => {
    return {type: TEXT_CHANGE, payload: text}
};
