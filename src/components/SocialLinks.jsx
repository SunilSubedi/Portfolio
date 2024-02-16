import React from 'react';
import { FaGithub,FaLinkedin,FaTwitter, FaInstagram } from "react-icons/fa";


export default function SocialLinks() {

    return (
      <div class="bg-gray-100 pt-2">
      <div class="flex pb-5 px-3 m-auto pt-5 border-t text-gray-800 text-sm flex-col
        max-w-screen-lg items-center">
          <div class="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
              <a href="https://github.com/SunilSubedi" class="w-8 mx-1 fill-current cursor-pointer text-gray-500 hover:text-indigo-600 text-lg" target="_blank">
                  <FaGithub/>
              </a>
              <a href="https://www.linkedin.com/in/sunil-subedi-746a1092/" target="_blank" class="w-8 mx-1 fill-current cursor-pointer text-gray-500 hover:text-indigo-600 text-lg">
                <FaLinkedin />
              </a>
              <a href="/#" class="w-8 mx-1 fill-current cursor-pointer text-gray-500 hover:text-indigo-600 text-lg">
                  <FaTwitter/>
              </a>
              <a href="/#" class="w-8 mx-1 fill-current cursor-pointer text-gray-500 hover:text-indigo-600 text-lg">
                  <FaInstagram/>
              </a>
              
          </div>
          <div class="my-5">© Copyright 2020. All Rights Reserved.</div>
      </div>
  </div>
  )
}
