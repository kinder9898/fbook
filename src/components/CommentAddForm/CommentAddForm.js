import React, { useState } from 'react'
import { COMMENT_ADD } from '../../actions/actionTypes';
export default function CommentAddForm({ postId, dispatch }) {
    const [comment, setComment] = useState('');

    const handleSubmitComment = evt => {
        evt.preventDefault();
        dispatch({ type: COMMENT_ADD, comment, postId });
        setComment('');
    };
    const handleChangeComment = evt => {
        const value = evt.target.value;
        setComment(value);
    }
    return (
        <div className='commentAddForm'>
            <form onSubmit={handleSubmitComment}>
                
                    <input type="text" placeholder='Напишите комментарий...' 
                    onChange={handleChangeComment}
                    className="inputAddComment" 
                    value={comment} />
                    <button className='send'>Отправить</button>
                

            </form>


        </div>
    )
}
