import React, {Component} from 'react';
import Comment from './Comment';
function CommentList({comments}) {
    
    return (
        <div className="commentListContainter">
            <ul className="comments"> 
            {
                comments.map(
                    comment => (
                        <Comment key={comment.id} comment={comment}/>
                    )
                )
            }
            </ul>
        </div>
    )
}

export default CommentList;