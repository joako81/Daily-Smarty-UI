import React, { Component } from 'react';

class RecentPosts extends Component {
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

export default RecentPosts;