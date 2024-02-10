//import { useState } from 'react'

import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";


function App() {

 const [page,setPage] = useState("home");
  return (
    <div>
     <Navbar setPage = {setPage} />
     <Home/>
     
     </div>
     
   
  )
}

export default App
