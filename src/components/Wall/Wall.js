import React, { useReducer } from 'react';
import EditForm from '../EditForm/EditForm';
import { ADD_POST, REMOVE_POST, COMMENT_ADD, COMMENT_LIKE, COMMENT_REMOVE, POST_LIKE } from '../../actions/actionTypes';
import Post from '../Post/Post';



let nextPostId = 1;
let nextCommentId = 1;

const initialPosts = [
    {
        id: nextPostId++, author: 'Alex', avatar: 'https://i.pravatar.cc/150?img=59', likes: 20,isLiked: false,
        postUrl: 'https://traveling.by/files/images/2018/05/410a88fafd901c0f69167abac04558eb-thumb-940x0.jpg',
        description: 'Nature in Costa Rica', comments: []
    },
    {
        id: nextPostId++, author: 'Karina', avatar: 'https://i.pravatar.cc/150?img=38', likes: 22,isLiked: false,
        postUrl: 'https://sputnik.kg/images/103287/35/1032873505.jpg', description: 'Fast & Furious', comments: [
            { id: nextCommentId++, author: 'John', ava: 'https://i.pravatar.cc/150?img=53', content: 'I enjoy this movie :)', likes: 15,isLiked: false, }
        ]
    },
    { id: nextPostId++, author: 'Marina', avatar: 'https://i.pravatar.cc/150?img=26', likes: 120, postUrl: 'https://i.pinimg.com/originals/7d/04/44/7d0444ead41445b6a51b1630b8a97ed5.jpg',isLiked: false, description: 'Awesome Bridge', comments: [] }
];
function likeComment(comments, id) {
    return comments.map(c => {
        if (c.id !== id) {
            return c;
        }
        if (c.isLiked) {
            return { ...c, likes: c.likes - 1, isLiked: false };
        }
        return { ...c, likes: c.likes + 1, isLiked: true };

    }

    );
}
function removeComment(comments, id) {
    return comments.filter(c => c.id !== id);
}
function addComment(comments, comment) {
    return [...comments, {
        id: nextCommentId++, ava: 'https://i.pravatar.cc/150?img=60',
        author: 'Karl', content: comment, likes: 0,
        isLiked: false
    },
    ]
}

function reducer(posts, action) {
    switch (action.type) {
        case POST_LIKE:
            {
                const { postId } = action;
                return posts.map(p => {
                    if (p.id !== postId) {
                        return p;
                    }
                    if (p.isLiked) {
                        return { ...p, likes: p.likes - 1, isLiked: false };
                    }
                    return { ...p, likes: p.likes + 1, isLiked: true }

                });
            }
        case COMMENT_ADD: {
            const { postId, comment } = action;
            return posts.map(
                p => ({
                    ...p,
                    comments: p.id !== postId ? p.comments : addComment(p.comments, comment)
                })
            )
        }
        case COMMENT_LIKE:
            {
                const { commentId } = action;
                return posts.map(
                    p => ({ ...p, comments: likeComment(p.comments, commentId) })
                );
            }
        case COMMENT_REMOVE:
            {
                const { commentId } = action;
                return posts.map(
                    p => ({ ...p, comments: removeComment(p.comments, commentId) })
                );
            }
        case ADD_POST:
            {
                const { photo, description } = action
                return [
                    {
                        id: nextPostId++, author: 'Karl', avatar: 'https://i.pravatar.cc/150?img=60',
                        likes: 0, postUrl: photo, description: description, comments: []
                    }, ...posts
                ]

            }
        case REMOVE_POST:
            {
                const { postId } = action;
                return posts.filter(o => postId !== o.id)
            };





        default:
            return posts;
    }
}
export default function Wall() {

    const [posts, dispatch] = useReducer(reducer, initialPosts);


    return (
        <div>
            <EditForm
                dispatch={dispatch}
            />
            {posts.map((o, idx) => <Post
                key={o.id}
                post={o}
                dispatch={dispatch}
            />)}


        </div>
    )
}
