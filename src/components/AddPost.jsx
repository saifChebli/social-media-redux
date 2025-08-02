import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../redux/actions";
import { Share } from "lucide-react";

const AddPost = () => {
  const [content, setContent] = useState("");
  const [image , setImage] = useState(null)
  const dispatch = useDispatch();


  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) setImage(URL.createObjectURL(file))
  }
  

  const addNewPost = () => {
    dispatch(addPost({content , image}));
    setContent("");
    setImage(null)
  };

  return (
    <div className="border border-gray-300 p-6 w-2/3 flex justify-center items-center">
      <div className="flex flex-col items-center w-full gap-6">
        <label htmlFor="addPost">Add new Post</label>
        <textarea
          value={content}
          placeholder="what's on your mind ?"
          onChange={(e) => setContent(e.target.value)}
          name="addPost"
          id="addPost"
          cols={60}
          className="border border-gray-300 p-2 outline-0 rounded "
        ></textarea>
        <input type="file" accept="image/*" onChange={handleImageChange}/>
        <button
          className="bg-black text-white px-4 py-2 rounded-md flex items-center gap-4 cursor-pointer"
          onClick={addNewPost}
        >
         <span> Share </span> 
         <Share />
        </button>
        {image && <img src={image} width={100} alt='preview' />}
      </div>
    </div>
  );
};

export default AddPost;
