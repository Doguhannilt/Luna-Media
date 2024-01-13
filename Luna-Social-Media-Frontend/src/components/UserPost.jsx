import React from 'react'
import { Link } from 'react-router-dom'

// Images
import avatar from '../images/zuck-avatar.png'
import verified from '../images/verified.png'
import default_post from '../images/post1.png'

// Icons
import {HamburgerIcon} from '@chakra-ui/icons'

// Redux
import PostNav from './PostNav'

const UserPost = () => {

    
  return (
    <Link to = {"/markzuckerberg/post/1"}>
        <div className = "mt-5 flex">
            <div className = "flex">
                    <img 
                    src= {avatar}
                    className = "h-20 rounded-full inline-block "
                    />
            </div>
            <div className = "flex-1 w-64">

            <div className = "flex">
                    <p 
                    className = "font-semibold font-arial ml-3">
                        markzuckerberg
                    </p>
                    <img 
                    src={verified} 
                    className = "h-5 mt-1 ml-2"
                    />
            </div>

                    <p className = "ml-3 mt-4 font-normal">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit culpa eius necessitatibus, ipsa rerum eaque quidem maiores nostrum, expedita itaque, beatae mollitia non. Explicabo corporis reiciendis dolorem fugiat, ea facere.
                    </p>

            </div>

            <div className = "flex " onClick={(e) => e.preventDefault()}>
                    <p className = "opacity-50">
                        1d
                    </p>
                    <HamburgerIcon 
                    h={6} 
                    w={5} 
                    color='gray.500' 
                    className = "ml-4" 
                    />
            </div>
            </div>

            <div className = "grid grid-rows-2 mt-3">
            
            <div>
                    <img 
                    src = {default_post}
                    className = "h-fit w-fit rounded-md hover:rounded-none duration-200 "
                    />
            </div>
            <PostNav/>
             </div>
        </Link>
  )
}

export default UserPost
