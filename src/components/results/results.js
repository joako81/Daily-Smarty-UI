import React, { Component } from 'react';
import Logo from '../logo/logo';
import SearchBar from '../searchBar/searchBar';

class Results extends Component {
    render() {
        return (
            <div>
               <Logo size={55}/>
               <SearchBar/>
               
            </div>
        );
    }
}

export default Results;