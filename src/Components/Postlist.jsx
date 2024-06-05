import { useContext, useEffect,useState } from "react";
import React from "react";
import Post from "./Post";
import Welcome from "./welcome";
import { PostList as PostListData } from "../Store/post-list-store";
import LoadingSpinner from "./loadingspinner";
import { useLoaderData } from "react-router-dom";


const Postlist = () => {
  const  postList  = useLoaderData();

  return (
    <>
    
      { postList.length === 0 && <Welcome  />}
      { postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  )
}

export const postLoader=()=>{
  return fetch('https://dummyjson.com/posts')
  .then(res => res.json())
  .then((obj)=>{ return obj.posts
    
});
}
export default Postlist;