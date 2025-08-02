export const ADD_POST = 'ADD_POST'
export const LIKE_POST = 'LIKE_POST'
export const ADD_COMMENT = 'ADD_COMMENT'
export const DISLIKE_POST = 'DISLIKE_POST'

export const addPost = (content) => ({type :ADD_POST , payload : content })



export const likePost = (id) => ({type : LIKE_POST , payload : id})



export const addComment = (id , commentText) => ({type : ADD_COMMENT, payload :{ id , commentText }} )

export const dislikePost = (id) => ({type : DISLIKE_POST , payload : id})