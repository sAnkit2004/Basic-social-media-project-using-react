import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Header from '../Components/header'
import Footer from '../Components/Footer'
import Sidebar from '../Components/Sidebar'
import Createpost from '../Components/Create-post'
import Postlist from '../Components/Postlist'
import { useState } from 'react'
import PostListProvider from '../Store/post-list-store'
import { Outlet } from "react-router-dom"

function App() {
  const [SelectedTab, setSelectedTab] = useState("Home");


  return (
    <PostListProvider>

      <div className="appContainer">

        <Sidebar SelectedTab={SelectedTab} setSelectedTab={setSelectedTab}></Sidebar>
        <div className="content">

          <Header></Header>
          <Outlet></Outlet>
          
          <Footer></Footer>
        </div>



      </div>
    </PostListProvider>


  )
}

export default App
