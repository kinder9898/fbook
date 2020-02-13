import React from 'react'
import Comment from '../Comment/Comment'

export default function Comments({ comments, dispatch }) {

    return (
        <div className='comments'> 
            {comments.map(o => <Comment key={o.id} comment={o} dispatch={dispatch} />)}
        </div>
    )
}
