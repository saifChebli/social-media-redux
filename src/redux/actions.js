export const ADD_POST = 'ADD_POST'
export const LIKE_POST = 'LIKE_POST'


export const addPost = (content) => ({type :ADD_POST , payload : content })



export const likePost = (id) => ({type : LIKE_POST , payload : id})