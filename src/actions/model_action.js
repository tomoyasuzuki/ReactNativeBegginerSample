import {FETCH_REPOSITORY, FETCHREQUEST_SUCCESS, FETCHREQUEST_FAILE} from "../constants/constants"

export const fetchAction = text => {
    return {type: FETCH_REPOSITORY, payload: text}
}

export const requestSuccess = repos => {
    return {type: FETCHREQUEST_SUCCESS, payload: repos}
}

export const requestFaile = e => {
    return {type: FETCHREQUEST_FAILE, payload: e.message}
}
