import React from 'react'

import avatar from '../images/zuck-avatar.png'

//Icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import {SettingsIcon} from '@chakra-ui/icons'

// Tailwind CSS
import { first_flex, image_grid, threads_display } from '../tailwind-design/user-header-tailwind';

// Redux
import { isTrue } from '../features/actions/isCopiedSlice';
import { useDispatch } from 'react-redux';

// Chakra UI Menu Button
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useToast,
} from '@chakra-ui/react'



const UserHeader = () => {
  const dispatch = useDispatch();
  const toast = useToast()

  const isCopied = () =>{
    const currentUrl = window.location.href;
    navigator.clipboard.writeText(currentUrl)
    .then(() => {
      toast({ description:'Copied'})
      dispatch(isTrue())
    })
  }
  return (
  <div>
      <div className="grid grid-cols-2">
        
        <div className = {`
        ${first_flex.flexContainer}
        ${first_flex.flexDirectionColumn}
        ${first_flex.marginTop}
        ${first_flex.marginLeft}
        ${first_flex.marginBottom}
        ${first_flex.paddingBottom}
        ${first_flex.paddingAll}`}
        >


        <p className = "font-bold text-2xl tracking-tight ">Mark Zuckerberg</p>

        <p className = "opacity-50">Zuckerberg</p>
        </div>
        <img 
        src={avatar} 
        className={`
        ${image_grid.height} 
        ${image_grid.rounded_full} 
        ${image_grid.margin_left}`}
        alt="Avatar" />
      </div>


      <div style={{ display: 'flex', alignItems: 'center' }}>
        <p className="mt-4">Co-Founder, Executive Chairman, and CEO of Meta Platforms</p>
                    {/* Instagram icon */}
              <FontAwesomeIcon icon={faInstagram} size="2x" className="mt-4 ml-20 text-gray-500 cursor-pointer hover:brightness-200 duration-500" />
               
        <Menu>
          {/* Settings icon */}
          <MenuButton as="button" className="ml-4 mt-4 opacity-50 cursor-pointer">
            <SettingsIcon w={7} h={7} />
          </MenuButton>
          <MenuList>
            <MenuItem onClick={isCopied}>Create a Copy</MenuItem>
          </MenuList>
        </Menu>

      </div>

       {/* Threads and Replies */}

       <div className = "mt-10 flex gap-1">
        <div className = {`
        ${threads_display.flexAuto}
        ${threads_display.border2}
        ${threads_display.cursorPointer}
        ${threads_display.hover}`}>
          <p className = 
          "text-center font-medium"> 
          Threads
          </p>
        </div>
        <div className = {`
        ${threads_display.flexAuto}
        ${threads_display.border2}
        ${threads_display.cursorPointer}
        ${threads_display.hover}`}
        >
          <p 
          className = 
          "text-center font-medium"> 
          Replies
          </p>
        </div>
       </div>
</div>
    
  )
}

export default UserHeader
