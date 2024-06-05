import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import {RouterProvider,  createBrowserRouter } from "react-router-dom"
import Createpost from './Components/Create-post.jsx'
import { PostList } from './Store/post-list-store.jsx'
import Postlist, { postLoader } from './Components/Postlist.jsx'

const router= createBrowserRouter([
  {path:"/",element:<App/>,children:[
     
    {path:"/",element:<Postlist />,loader:postLoader},
  {path:"/create-post",element:<Createpost/>}
  ]},
  

]
  
   
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    
  </React.StrictMode>,
)
