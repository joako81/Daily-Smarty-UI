import React, { Component } from 'react';
import Logo from '../logo/logo';
import SearchBar from '../searchBar/searchBar';

class Results extends Component {

    handleSearchBarSubmit (query) {
        console.log(query);

    }

    render() {
        return (
            <div>
               <Logo size={55}/>
               <SearchBar onsubmit = {(query)=> this.handleSearchBarSubmit(query)}/>
               
            </div>
        );
    }
}

export default Results;