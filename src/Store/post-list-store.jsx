import { createContext, useReducer } from "react";

export const PostList= createContext({
    postList: [],
    addPost: () => {

    },
    addinitialPost: () => {

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
    
    const addPost = (useId,postTitle,postBody,reactions,tags) => {
        dispatchPostList({
            type:'ADD_POST',
            payload:{
            id:Date.now(),
            title: postTitle,
            body: postBody,
            reactions:reactions,
            userId: useId,
            tags: tags

            }
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



    return <PostList.Provider value={{ postList, addPost,addinitialPost, deletePost }}>

        {children}

    </PostList.Provider>

    
}

export default PostListProvider