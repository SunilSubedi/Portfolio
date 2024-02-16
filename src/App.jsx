//import { useState } from 'react'

import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import Footer from "./components/Footer";



function App() {

 const [page,setPage] = useState("home");
  return (
    <div>
     <Navbar setPage = {setPage} />
     <Home/>
     <Footer />
     
     </div>
     
   
  )
}

export default App
