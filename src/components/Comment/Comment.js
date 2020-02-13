import React from 'react'
import { COMMENT_LIKE, COMMENT_REMOVE } from '../../actions/actionTypes';

export default function Comment({ comment, dispatch }) {
    const handleLike = () => {
        dispatch({ type: COMMENT_LIKE, commentId: comment.id });
    };
    const handleRemove = () => {
        dispatch({ type: COMMENT_REMOVE, commentId: comment.id });
    };

    return (
        <div className="comment">
            <div><img className='ava' src={comment.ava} alt=""/></div>
            <h2>{comment.author}</h2>
            <div className='commentContent'>{comment.content}</div>
            <footer>
                <div className='likeBlock'>{comment.likes} <button className={comment.isLiked?"btn blue":"btn"} onClick={handleLike}><img className='likeComment' src="https://pngimg.com/uploads/like/like_PNG55.png" alt="" /></button></div>
                <div className='removeBlock'><button onClick={handleRemove}><img src="https://image.flaticon.com/icons/png/512/61/61848.png" alt="" className="remove_comment" /></button></div>
            </footer>
        </div>
    )
}
