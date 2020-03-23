import React, {Component} from 'react';
import CommentList from './CommentList';
import './Post.css';

function Post({post}) {
    
    return (
        <div className="postContainter">
            <div className="avatar">
                <img className="avatar" src={post.author.avatar} alt={post.author.name}/>

                <div className="userInfo">
                    <strong>{post.author.name}</strong>
                    <a>{post.date}</a>
                </div>
            </div>
                
            <p className="postContent">{post.content}</p>
            
            <div className="divider"/>
            <CommentList comments={post.comments}/>
        </div>
    )
}

export default Post;