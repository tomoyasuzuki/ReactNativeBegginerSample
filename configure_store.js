import { createStore, combineReducers, applyMiddleware} from "redux";
import createSagaMiddleware from 'redux-saga';
import bindTextChanged from './src/reducers/ui_reducer';
import responseHandler from './src/reducers/model_reducer';
import fetchRepos from './src/middleware/watchFetchAction';

const rootReducer = combineReducers({bindTextChanged, responseHandler});

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

    sagaMiddleware.run(fetchRepos);

    return store
}

export default configureStore;

