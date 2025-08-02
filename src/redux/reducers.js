import { ADD_POST, LIKE_POST, ADD_COMMENT , DISLIKE_POST} from "./actions";

// Step 1 : Define an initial state

const initialState = {
  posts: [],
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        posts: [
          ...state.posts,
          { id: Date.now(), content: action.payload.content, likes: 0, dislikes: 0, comments: [] , image : action.payload.image || null , createdAt : new Date().toISOString()},
        ],
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
    default:
      return state;
  }
};
