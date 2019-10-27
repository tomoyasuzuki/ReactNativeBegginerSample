import { all } from 'redux-saga/effects';
import {fetchRepos} from './watchFetchAction';

export default function* rootSaga() {
    yield all([fetchRepos])
}