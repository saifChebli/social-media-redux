import { createStore , applyMiddleware } from 'redux'
import { thunk } from 'redux-thunk'
import { postsReducer } from './reducers'




export const store = createStore( postsReducer , applyMiddleware(thunk) )