import { useContext, useEffect,useState } from "react";
import React from "react";
import Post from "./Post";
import Welcome from "./welcome";
import { PostList as PostListData } from "../Store/post-list-store";
import LoadingSpinner from "./loadingspinner";


const Postlist = () => {
  const { postList,fetching } = useContext(PostListData);

  return (
    <>
    {fetching && <LoadingSpinner/>}
      {!fetching && postList.length === 0 && <Welcome  />}
      {!fetching && postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  )
}
export default Postlist;