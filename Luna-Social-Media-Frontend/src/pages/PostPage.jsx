import React from 'react'

import logo from '../images/zuck-avatar.png' // avatar
import verified from '../images/verified.png' // verified logo
import post1 from '../images/post1.png'
import {HamburgerIcon} from '@chakra-ui/icons'


// PostNav
import PostNav from '../components/PostNav'
// Comments
import Comments from '../components/Comments'

const PostPage = () => {
  return (
    <div>
        <div className = "flex">
          <img 
          src = {logo} 
          className = "h-20 w-20 rounded-full"
          />
          <p className = "mt-5 ml-3 font-semibold font-arial">
            markzuckerberg
          </p>
          <img 
          src = {verified}
          className = "h-5 w-5 mt-6 ml-1"
          />
          <p className = "opacity-50 pl-80 ml-10 mt-5">
            1d
          </p>
          <HamburgerIcon
          className = "mt-6 ml-4 cursor-pointer"
          />
        </div>
        
        <p className = "mt-2 font-arial font-medium">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt molestias dolore molestiae labore quis beatae accusantium eaque autem officia sit modi consequatur possimus aliquam commodi, quisquam delectus corporis harum! Ipsa!
        </p>

        <img 
        src={post1}
        className = "mt-2 rounded-md hover:rounded-none"
        />

        {/* POST NAV */}
        <PostNav />
        <div className = "border-l-gray-500 border-b-2 mt-4 "/>
        {/* COMMENTS */}
        <Comments />
        

    </div>
  )
}

export default PostPage
