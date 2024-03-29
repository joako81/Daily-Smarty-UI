import React, { Component } from 'react';
import Logo from '../logo/logo';
import SearchBar from '../searchBar/searchBar';
import ResultsPosts from '../resultsPosts/resultsPosts';

import {connect} from 'react-redux';
import * as actions from '../../actions';

class Results extends Component {

    handleSearchBarSubmit ({query}) {
        this.props.fetchPostsWithQuery(query);

    }

    render() {
        return (
            <div>
               <Logo size={55}/>
               <SearchBar onsubmit = {(query)=> this.handleSearchBarSubmit(query)}/>
               <ResultsPosts/>
            </div>
        );
    }
}

export default connect(null, actions)(Results);