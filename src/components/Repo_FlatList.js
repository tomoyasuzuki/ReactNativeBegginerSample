import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import {connect} from 'react-redux';

export class Repo_FlatList extends Component {
    render() {
        return(
            <FlatList
                data={this.props.repos}
                renderItem={({item}) =>
                    <View style={styles.cell}>
                        <Text style={styles.text} >{item.name}</Text>
                    </View>}
                keyExtractor={item => item.name}    
            />
        )
    }
}

const styles = {
    cell: {
        flexDirection: 'row',
        borderStyle: 'solid',
        borderWidth: 0.5,
        borderColor: '#bbb',
    },
    text: {
        padding: 10,
        fontSize: 18,
    },
}

const mapStateToProps = state => ({
    repos: state.responseHandler.repos
})


export default connect(mapStateToProps, null)(Repo_FlatList);

