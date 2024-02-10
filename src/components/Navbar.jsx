import React, { useState } from 'react';
import {FaBars,FaTimes} from 'react-icons/fa'

function Navbar({setPage}) {
    const [nav, setNav] = useState(false)
    const links = [
        {id:1, name:"home"},
        {id:2, name:"about"},
        {id:3, name:"contact"},
        {id:4, name:"Gallery"}

    ]
    return (
        <div className="flex  justify-between items-center w-full px-4 bg-slate-600 fixed h-20 text-white">
            <div><h1 className="text-5xl font-signature ml-2">Sunil</h1></div>
          
                <ul className=" hidden md:flex">
                    {links.map((menu)=>(

                        <li  key={menu.id} onClick={()=>setPage(menu.name)} className="px-4 cursor-pointer font-medium text-gray-300 hover:scale-110 duration-200 capitalize">{menu.name}</li>

                    ))}

                </ul>
            <div className="cursor-pointer  pr-4  z-10 md:hidden" onClick={()=> setNav(!nav)}>
                {nav ? <FaTimes size={30} /> :  <FaBars size={30} />}
                
            </div>
            {nav && (
                <ul className="flex flex-col justify-center bg-black w-full  items-center absolute  top-0 left-0 h-screen bg-gradient-to-t from-black  to-gray-500 ">
                    {links.map((menu)=>(

            <li  key={menu.id}  onClick={()=>setPage(menu.name)} className="py-4 px-4 cursor-pointer font-medium text-gray-300 hover:scale-110 duration-200 capitalize">{menu.name}</li>

        ))}
                </ul>
            )}
           

        </div>
    );
}

export default Navbar;