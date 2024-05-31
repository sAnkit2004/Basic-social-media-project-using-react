import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Header from './Components/header'
import Footer from './Components/Footer'
import Sidebar from './Components/Sidebar'
import Createpost from './Components/Create-post'
import Postlist from './Components/Postlist'
import { useState } from 'react'
import PostListProvider from './Store/post-list-store'

function App() {
  const [SelectedTab, setSelectedTab] = useState("Home");


  return ( 
    <PostListProvider>

      <div className="appContainer">

        <Sidebar SelectedTab={SelectedTab} setSelectedTab={setSelectedTab}></Sidebar>
        <div className="content">

          <Header></Header>

          {
            SelectedTab === 'Home' ? <Postlist ></Postlist> : <Createpost></Createpost>
          }

          <Footer></Footer>
        </div>



      </div>
    </PostListProvider>


  )
}

export default App
