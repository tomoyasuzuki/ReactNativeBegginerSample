import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class Header extends Component {
    render() {
        return(
            <View style = {styles.header}>
                <Text style = {styles.headerText}>GitHubRepositorySearch</Text>
            </View>
        )
    }
}

const styles = {
    header: {
        backgroundColor: '#F8F8F8',
        justifyContent: "center",
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        elevation: 2,
        position: 'relative'
      },

      headerText: {
        fontSize: 20,
        fontWeight: '600',
      }
};
