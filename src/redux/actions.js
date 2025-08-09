import axios from "axios"
export const ADD_POST = 'ADD_POST'
export const LIKE_POST = 'LIKE_POST'
export const ADD_COMMENT = 'ADD_COMMENT'
export const DISLIKE_POST = 'DISLIKE_POST'


export const FETCH_POST_REQUEST = 'FETCH_POST_REQUEST'
export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS'
export const FETCH_POST_FAILED = 'FETCH_POST_FAILED'
export const FETCH_USERS_LIST = 'FETCH_USERS_LIST'
export const FETCH_USERS_LIST_SUCCESS = 'FETCH_USERS_LIST_SUCCESS'
export const FETCH_USERS_LIST_FAILED = 'FETCH_USERS_LIST_FAILED'


export const ADD_POST_FAILED = 'ADD_POST_FAILED'

export const addPost = (content , image) => {

    const newPost = {
        content,
        image : image || null ,
        likes : 0,
        dislikes : 0,
        comments : [],
        createdAt : new Date().toISOString()
    }

    return async (dispatch) => {

        try {
            const response = await axios.post('http://localhost:5000/posts' , newPost)
            dispatch({type : ADD_POST , payload : response.data})
        } catch (error) {
            dispatch({type : ADD_POST_FAILED , payload : error.message})
        }
    }
}



export const likePost = (id) => ({type : LIKE_POST , payload : id})



export const addComment = (id , commentText) => ({type : ADD_COMMENT, payload :{ id , commentText }} )

export const dislikePost = (id) => ({type : DISLIKE_POST , payload : id})




export const fetchPost = () => {
    return async (dispatch) => {
        dispatch({ type : FETCH_POST_REQUEST });
        try {
            const response = await axios.get('http://localhost:5000/posts');
            
            // const posts = response.data.map(item => ({
            //     id: item.id,
            //     content : item.title,
            //     image : null,
            //     likes : 0,
            //     dislikes :0,
            //     comments : [],
            //     createdAt : new Date().toISOString()
            // }))

            dispatch({ type : FETCH_POST_SUCCESS , payload : response.data })


        } catch (error) {
            dispatch({ type : FETCH_POST_FAILED , payload : error.message })
        }
    }

}

export const fetchUsersList = () => {
    return async (dispatch) => {
        dispatch({ type : FETCH_USERS_LIST });
        try {
            const response = await axios.get('http://localhost:5000/users')
            dispatch({type : FETCH_USERS_LIST_SUCCESS , payload : response.data})
        } catch (error) {
            dispatch({ type : FETCH_USERS_LIST_FAILED , payload : error.message })
        }
    }
}