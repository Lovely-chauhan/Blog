 import Header from "../../components/header/Header"
 import Post from "../../components/posts/Post"
 import Sidebar from "../../components/sidebar/Sidebar"

 import "./home.css"
 
 export default function Home() {
   return (
    <>
     <Header/>
     <div className="home">
      <Post/>   
      <Sidebar/>
     </div>
     </>
   )
 }
 