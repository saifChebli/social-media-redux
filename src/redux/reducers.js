import { ADD_POST, LIKE_POST, ADD_COMMENT , DISLIKE_POST, FETCH_POST_REQUEST, FETCH_POST_SUCCESS, FETCH_POST_FAILED, FETCH_USERS_LIST, FETCH_USERS_LIST_FAILED, FETCH_USERS_LIST_SUCCESS} from "./actions";

// Step 1 : Define an initial state

const initialState = {
  posts: [],
  users: [],
  loading : false,
  error : null
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state , posts : [action.payload , ...state.posts]
      };
    case LIKE_POST:
      return {
        posts: state.posts.map((item) =>
          item.id === action.payload ? { ...item, likes: item.likes + 1 } : item
        ),
      };
      case DISLIKE_POST:
      return {
        posts: state.posts.map((item) =>
          item.id === action.payload ? { ...item, dislikes: item.dislikes + 1 } : item
        ),
      };
    case ADD_COMMENT:
      return {
        posts: state.posts.map((item) =>
          item.id === action.payload.id
            ? { ...item, comments: [...item.comments ,action.payload.commentText] }
            : item
        ),
      };
    case FETCH_POST_REQUEST :
      return {
        ...state,
        loading : true
      }
    case FETCH_POST_SUCCESS :
      return {
        ...state,
        loading : false,
        posts : action.payload
      }
    case FETCH_POST_FAILED :
      return {
        ...state,
        loading : false,
        error: action.payload
      }
    case FETCH_USERS_LIST:
      return {
        ...state,
        loading: true 
      }
    case FETCH_USERS_LIST_SUCCESS:
      return {
        ...state,
        loading : false,
        users : action.payload
      }
    case FETCH_USERS_LIST_FAILED:
      return {
        ...state,
        loading : false,
        error : action.payload
      }
    default:
      return state;
  }
};
