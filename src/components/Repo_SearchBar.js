import React, {Component} from 'react';
import {SearchBar} from 'react-native-elements';
import {bindTextChangedAction} from '../actions/ui_action';
import {fetchAction} from '../actions/model_action';
import {connect} from 'react-redux';

export class Repo_SearchBar extends Component {
    render() {
        return(
            <SearchBar 
                round 
                placeholder="Search"
                 onChangeText={text => {this.props.bindTextChangedAction(text); this.props.fetchAction(text)}}
                value={this.props.searchText}
            />
        )
    }
}

const mapStateToProps = state => ({
    searchText: state.bindTextChanged.searchText
})

const mapDispatchToProps = {
   bindTextChangedAction,fetchAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Repo_SearchBar);

