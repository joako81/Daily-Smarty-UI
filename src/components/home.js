import React, { Component } from 'react';
import Logo from './logo/logo';
import RecentPosts from './recentPosts/recentPosts';
import SearchBar from './searchBar/searchBar';

export default class Home extends Component {

  handleSearchBarSubmit (query) {
        
    console.log('trying to handle submit for query', query);
    this.props.history.push('/results');
}


  render() {
    return (
      <div className='app'>
        <Logo/>
        <SearchBar onSubmit={(query) => this.handleSearchBarSubmit(query)}/>
        <RecentPosts/>
      </div>
    );
  }
}
