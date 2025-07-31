import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { likePost } from '../redux/actions'


const PostList = () => {

  const posts = useSelector(state => state.posts)
  const dispatch = useDispatch()

  return (
    <div>
       {
        posts.map(post => (
          <div key={post.id}>
              <p>{post.content}</p>
              <button onClick={() => dispatch(likePost(post.id))}>
                 👍 {post.likes}
              </button>
          </div>
        ))
       }
    </div>
  )
}

export default PostList