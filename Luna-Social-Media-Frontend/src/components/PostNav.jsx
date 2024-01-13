import React from 'react'

// Icons
import { BiRepost } from "react-icons/bi";
/* import { BiLike } from "react-icons/bi"; */
import { FaDirections , FaRegComment} from "react-icons/fa";
import { LuHeart } from "react-icons/lu";

// useToast and Redux
import { useToast } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { isLiked } from '../features/actions/isLikedSlice'

const PostNav = () => {
    const toast = useToast()
    const dispatch = useDispatch();
    const color = useSelector((state) => state.isliked.color)

    const handleLikeClick = () => {
        console.log("Liked")
        dispatch(isLiked());
    };
    
    const showToast = () => {
        // Create an example promise that resolves in 5s
        const examplePromise = new Promise((resolve, reject) => {
          setTimeout(() => resolve(1000), 1000);
        });
      
        const color_selector = (color === 'red') ? "Doesn't like it!" : "Like it!";

        // Will display the loading toast until the promise is either resolved
        // or rejected.
        return toast.promise(examplePromise, {
          success: { title: '', description: color_selector },
          loading: { title: '', description: 'Please wait' },
        });
      };
  
    {/*const tie = () =>{
            if(color === "red"){
                return console.log("Red")
            }else{
                return console.log("White")
            }
      }
    console.log(tie())*/}

  return (
    <div className = "flex gap-3 mt-3" onClick={(e) => e.preventDefault()}>
        <div onClick={showToast}>

        <LuHeart color={color} onClick={handleLikeClick}  className = "h-7 w-7 cursor-pointer" />
    </div>
        <FaRegComment color='gray' className = "h-7 w-7 cursor-pointer " />
        <BiRepost color='gray' className = "h-8 w-8 cursor-pointer" />
        <FaDirections color='gray' className = "h-7 w-7 cursor-pointer " />
     <div className = "flex pl-80">
        <p className = "opacity-50"> 400 replies &#8226; </p>
        <p className = "opacity-50">  1200 likes</p>
    </div>
        </div>


  )
}

export default PostNav
