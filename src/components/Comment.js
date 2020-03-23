import React, {Component} from 'react';
import './Comment.css'
function Comment({comment}) {
    
    return (
        <div className="commentContainter">
            <img className="avatar" src={comment.author.avatar} alt={comment.author.name}/>
            <div className="commentContent"> 
                <p><strong>{comment.author.name}</strong> {comment.content}</p>
            </div>
        </div>
    )
}

export default Comment;