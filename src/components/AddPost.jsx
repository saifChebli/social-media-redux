import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../redux/actions";

const AddPost = () => {
  const [content, setContent] = useState("");

  const dispatch = useDispatch()

  const addNewPost = () => {
    dispatch(addPost(content))
    setContent('')
  }

  
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="what's on your mind ?"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button onClick={addNewPost}>Share</button>
      </div>
    </div>
  );
};

export default AddPost;
