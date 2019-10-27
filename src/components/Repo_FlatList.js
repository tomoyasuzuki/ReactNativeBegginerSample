import React, {Component} from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import {connect} from 'react-redux';

export class Repo_FlatList extends Component {
    render() {
        return(
            <FlatList
                data={this.props.repos}
                renderItem={({item}) =>
                    <View style={styles.cell}>
                        <View style={styles.imageWrapView}>
                        <Image 
                        source={{uri: item.owner.avatar_url}}
                        style={styles.iconImage}
                         />
                         </View>
                         <View style={styles.textWrapView}>
                        <Text style={styles.text} >{item.name}</Text>
                        <Text style={styles.subText}>{item.html_url}</Text>
                        </View>
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

    textWrapView: {
        flexDirection: 'column',
        marginRight: 10,
    },

    text: {
        margin: 10,
        fontSize: 22,
        width: 300,
        textAlign: 'justify'
    },

    subText: {
        margin: 10,
        fontSize: 18,
        width: 300,
        color: '#808080'
    },

    imageWrapView: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    iconImage: {
        borderRadius: 30,
        margin: 10,
        borderWidth: 2.0,
        borderColor: '#00ff7f',
        width: 60,
        height: 60,
    }
}

const mapStateToProps = state => ({
    repos: state.responseHandler.repos
})


export default connect(mapStateToProps, null)(Repo_FlatList);

