import { createContext, useEffect, useReducer, useState } from "react";

export const PostList= createContext({
    postList: [],
    fetching:false,
    addPost: () => {

    },
    deletePost: () => {

    }
});

const postListReducer = (currPostList, action) => {
    let newPostList=currPostList;
    if(action.type==='DELETE_POST'){
        newPostList=currPostList.filter((post)=>post.id!==action.payload.postId)
        
    }else if(action.type==="ADD_INTIAL_POST") {
        newPostList=action.payload.posts;
    }
    
    else if (action.type==="ADD_POST"){
        newPostList=[action.payload,...currPostList]
    }
    return newPostList
}

const PostListProvider = ({ children }) => {
    const [postList, dispatchPostList] = useReducer(postListReducer,[])
   
    
    const addPost = (post) => {
        dispatchPostList({
            type:'ADD_POST',
            payload:post,
        })

    }

    const addinitialPost = (posts) => {
        dispatchPostList({
            type:'ADD_INTIAL_POST',
            payload:{
              posts,

            }
        })

    }

    const deletePost = (postId) => {
        dispatchPostList({
            type:'DELETE_POST',
            payload:{
                postId,
            }
        })

    }
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



    return <PostList.Provider value={{ postList, addPost,addinitialPost,fetching, deletePost }}>

        {children}

    </PostList.Provider>

    
}

export default PostListProvider