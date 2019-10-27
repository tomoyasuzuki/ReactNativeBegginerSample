
import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import configureStore from './configure_store';
import Top from './src/components/Top';

const store = configureStore()


class App extends Component {
    render() {
        return(
            <Provider store={store}>
            <Top />
            </Provider>
        )
    }
}


AppRegistry.registerComponent(appName, () => App);