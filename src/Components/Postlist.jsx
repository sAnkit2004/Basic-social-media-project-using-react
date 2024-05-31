import { useContext, useEffect,useState } from "react";
import React from "react";
import Post from "./Post";
import Welcome from "./welcome";
import { PostList as PostListData } from "../Store/post-list-store";
import LoadingSpinner from "./loadingspinner";


const Postlist = () => {
  const { postList, addinitialPost } = useContext(PostListData);
const [fetching,setFetching]=useState(false);

  useEffect(()=>{
    setFetching(true)
    const Controller=new AbortController();
    const signal=Controller.signal;
    fetch('https://dummyjson.com/posts',{signal})
      .then(res => res.json())
      .then((obj)=>{addinitialPost(obj.posts)
        setFetching(false)
      });
      return ()=>{
        Controller.abort();
      }
      

  },[])
  


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