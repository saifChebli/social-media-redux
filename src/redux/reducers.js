import { ADD_POST , LIKE_POST } from './actions'



// Step 1 : Define an initial state

const initialState = {
    posts : [
        { id : 1 , content : 'Redux is awesome !' , likes : 0 }
    ]
}



export const postsReducer = (state = initialState , action) => {
    switch (action.type) {
        case ADD_POST:
           return {
             posts : [...state.posts , { id : Date.now() , content : action.payload , likes : 0}]
           }
            case LIKE_POST :
                return {
                    posts : state.posts.map(item => item.id === action.payload ? {...item , likes : item.likes + 1} : item)
                }
        default:
            return state
    }
}