import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { likePost , addComment, dislikePost} from "../redux/actions";
import { Heart , ThumbsDown} from "lucide-react";


const PostList = () => {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  const [commentValue , setCommentValue] = useState({})


 const addNewComment =(postId) => {
  dispatch(addComment( postId , commentValue))
  setCommentValue({...commentValue , [postId] : ''})
 }

 const handleComment = (id , text) => {
  setCommentValue({...commentValue , [id] : text})
 }

 const timeAgo = (timestamp) => {
    const seconds = Math.floor((new Date() - new Date(timestamp)) / 1000)
    if (seconds < 60) return 'Just now'
    const minutes = Math.floor(seconds / 60)
    if (minutes < 60) return `${minutes} min ago`
    const hours = Math.floor(minutes / 60)
    return `${hours} hr ago`
    
 }
 
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id} className="flex  flex-col gap-16 items-start justify-between w-full border my-4 rounded-2xl border-gray-300  p-6">
          <div className="flex items-center justify-between w-full">

              <p className="text-xl font-semibold">{post.content}</p>
              {post.image && <img src={post.image} width={200} />}
              <div>
                {timeAgo(post.createdAt)}
              </div>
              <button
                className="bg-black text-white px-2 py-2 flex items-center gap-2 rounded-full cursor-pointer"
                onClick={() => dispatch(likePost(post.id))}
                >
                <span>{post.likes}</span> 
                <Heart />
              </button>
              <button
                className="bg-black text-white px-2 py-2 flex items-center gap-2 rounded-full cursor-pointer"
                onClick={() => dispatch(dislikePost(post.id))}
                >
                <span>{post.dislikes}</span>
                <ThumbsDown />
              </button>
            </div>
          <div className="flex flex-col items-start gap-2 w-full">
            <input className="border border-gray-300 outline-0 w-60 px-2 py-2 m-0" placeholder="Add a comment ..." value={commentValue[post.id]} onChange={e => handleComment(post.id , e.target.value)} />
            <button className="bg-black text-white px-2 py-1 flex items-center gap-2  cursor-pointer" onClick={() => addNewComment(post.id)}>Comment</button>
          </div>
            <div className="border-b border-gray-100">
              {
                post.comments.map((comment , index) => (
                  <p key={index} className="text-gray-400 font-semibold capitalize py-2">
                    {comment[post.id]}
                  </p>
                ))
              }
            </div>
        </div>
      ))}
    
    </div>
  );
};

export default PostList;
