import React from 'react'
import CommentAddForm from '../CommentAddForm/CommentAddForm';
import {REMOVE_POST} from '../../actions/actionTypes';
import Comments from '../Comments/Comments';
import { POST_LIKE } from '../../actions/actionTypes';

export default function Post({ post, dispatch }) {
    const handleRemove = () => {
        dispatch({ type: REMOVE_POST, postId: post.id })
    };
    const handleLike = () => {
        dispatch({ type: POST_LIKE, postId: post.id });
    };
    return (

        <div className="post">
            <div className="postAbout">
                <div className='authorBlock'>
                    <img className="authorAva" src={post.avatar} alt="" />
                    <h3>{post.author}</h3>
                </div>
                <div className="description">
                    {post.description}
                </div>
            </div>

            <img className='postImg' src={post.postUrl} alt="" />
            <div className="actions">
                <div className="likePost">{post.likes}
                    <button className={post.isLiked?"btn blue":"btn"}  onClick={handleLike} >
                        <img className='like' src="https://pngimg.com/uploads/like/like_PNG55.png" alt="" />
                        <span className='spanText'>Нравится</span>
                    </button>
                </div>

                <div className="commentBtn">
                    <button className="btn"><img className='commentIcon' src="https://www.freeiconspng.com/uploads/comment-png-1.png" alt="" />
                        <span className='spanText'>Комментировать</span>
                    </button>
                </div>
                <div className="removePost">
                    <button className="btn" onClick={handleRemove}>
                        <img src="https://image.flaticon.com/icons/png/512/61/61848.png" alt="" className="remove" />
                    </button>
                </div>


            </div>
            <CommentAddForm postId={post.id} dispatch={dispatch} />
            <Comments comments={post.comments} dispatch={dispatch} />




        </div>

    )
}
