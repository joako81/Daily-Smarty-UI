import React, { Component } from 'react';

import { connect } from 'react-redux';

import * as actions from'../../actions';

class SearchBar extends Component {

    componentDidMount() {
        this.props.fetchRecentPosts();
    }

    render() {
        return (
            <div className="recents-posts">
                <div className="recents-posts-wrapper">
                    <div className="recent-posts-heading"> Recent Posts
                    </div>
                        <ul className ="recent-posts-list">
                            <li>Recent Post 1</li>
                            <li>Recent Post 2</li>
                            <li>Recent Post 3</li>
                        </ul>
                </div>
                    
            </div>
        );
    }
}

export default connect(null, actions)(SearchBar);