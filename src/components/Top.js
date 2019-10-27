import React, {Component} from 'react';
import { SafeAreaView } from 'react-native';
import Header from './Header';
import Repo_SearchBar from './Repo_SearchBar';
import Repo_FlatList from './Repo_FlatList';



export default class Top extends Component {
  render() {
    return(
      <SafeAreaView>
      <Header />
      <Repo_SearchBar />
      <Repo_FlatList />
      </SafeAreaView>
    )
  }
}

