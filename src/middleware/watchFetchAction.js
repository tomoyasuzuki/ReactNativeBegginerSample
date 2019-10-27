import {call, put, takeEvery, take} from 'redux-saga/effects';
import {FETCH_REPOSITORY} from '../constants/constants';
import {requestSuccess, requestFaile} from '../actions/model_action';

function* fetchRepos(action) {
    while(true) {
        const action = yield take(FETCH_REPOSITORY)
        const text = action.payload

        try {
            const repos = yield call(fetchAsync, text)
            yield put(requestSuccess(repos))
        } catch(e) {
            yield put(requestFaile(e.message))
        }
    }
}


function　fetchAsync(text) {
    return fetch(`https://api.github.com/search/repositories?q=${text}+in:name&sort=stars`)
        .then(response => response.json())
        .then(data => data.items)
        .catch(e => {
            throw e;
        });
}

export default fetchRepos;