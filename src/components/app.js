import React, { Component } from 'react';
import Logo from './logo/logo';
import RecentPosts from './recentPosts/recentPosts';
import SearchBar from './searchBar/searchBar';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Logo/>
        <SearchBar/>
        <RecentPosts/>
      </div>
    );
  }
}
