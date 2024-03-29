import React, { Component } from 'react';

import { connect } from 'react-redux';

import * as actions from'../../actions';

import Post from '../post/post';

class SearchBar extends Component {

    componentDidMount() {
        this.props.fetchRecentPosts();
    }

    renderPosts = function() {
        const posts = this.props.recentPosts.map((post, index) => {
            if(index < 3) {
                return (
                    <Post {...post}  key={index}/>
                )   
            }
        })
        return posts
    }

    render() {
        return (
            <div className="recents-posts">
                <div className="recents-posts-wrapper">
                    <div className="recent-posts-heading"> Recent Posts
                    </div>
                        <ul className ="recent-posts-list">
                          {this.renderPosts()}
                        </ul>
                </div>
                    
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        recentPosts: state.posts.recentPosts
    }
}

export default connect(mapStateToProps, actions)(SearchBar);