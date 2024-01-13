import React from 'react'
import { useToast, Box } from '@chakra-ui/react'



// Shared comment image
import shared_post from '../images/shared.jpg'
import { HamburgerIcon } from '@chakra-ui/icons'
import CommentNav from '../components/CommentNav'

const Comments = () => {

  const toast = useToast()

  return (
    <div>
        <form>
        <div className = "flex">

            {/* Comments header */}

        <input 
        type="text" 
        id="large-input" 
        placeholder="Post and Share your idea!"
        className="block 
        h-4 
        p-4 
        mt-3 
        w-full 
        rounded-s-lg 
        text-gray-900 
        border 
        border-gray-800
        bg-gray-50 
        sm:text-md 
        focus:ring-blue-800 
        dark:bg-gray-700 
        dark:border-gray-600 
        dark:placeholder-gray-400 
        dark:text-white 
        dark:focus:ring-blue-500 
        dark:focus:border-blue-500"/>
        

        <button 
        type="button" 
        onClick={() => toast({
          position: 'bottom-left',
          render: () => (
            <Box color='white' p={2} bg='blue.900' className = "opacity-100  hover:opacity-50 duration-100">
            <div>Shared!</div>
            </Box>
          )
        })}
        
        className="text-white 
                    mt-2 ml-2 
                    bg-gray-800
                    hover:bg-gray-900 
                    focus:outline-none
                    focus:ring-4 
                    focus:ring-gray-300 
                    font-medium 
                    rounded-lg 
                    text-sm px-5 
                    py-2.5 
                    me-2 
                    mb-2 
                    dark:bg-gray-800 
                    dark:hover:bg-gray-700 
                    dark:focus:ring-gray-700 
                    dark:border-gray-700">
                  GET    
          </button>

        </div>
        </form>

        {/* Shared comments */}

    <div>
    <div className = "flex">
          <img 
          src = {shared_post} 
          className = "h-12 rounded-full"
          />
          <p className = " ml-3 font-semibold font-arial">
            billgates
          </p>

        </div>
        <p className = "font-arial font-medium ml-14">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
     </div>
          <CommentNav/>
    </div>
  )
}

export default Comments
