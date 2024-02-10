import { MdArrowForwardIos } from "react-icons/md";

import sunilImage from "../assets/sunil.png";

 function Home() {
  return (
    <div name="home" className=" h-screen w-full bg-gradient-to-t from-black to-gray-800">
        <div className=" max-w-screen-lg  mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
            <div className="flex flex-col justify-center h-full">
                <h2 className=" text-4xl sm:text-7xl text-white font-bold">I am Full Stack Developer</h2>
                <p className=" text-gray-300 py-4 max-w-md">
                    I have 8 years of experience of working as full stack developer.
                </p>
                <div>
                    <button className=" group text-white py-4 flex items-center px-6  my-2  rounded-md bg-gradient-to-r  from-emerald-400 to-sky-800  cursor-pointer">
                        Portfolio <span className=" group-hover:rotate-90 duration-500"><MdArrowForwardIos size={20}/></span>
                        </button>
                </div>
            </div>
            <div>
                <img src={sunilImage} alt="myself"  className=" rounded-2xl mx-auto w-2/3 md:w-1/2"/>
            </div>
        </div>
       
    </div>
  )
}

export default Home 