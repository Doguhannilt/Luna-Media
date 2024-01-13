import React, { useEffect } from 'react';
import LOGO from '../images/L.png';
import { logo } from '../tailwind-design/header-tailwind';
import { useColorMode } from '@chakra-ui/react';


const Header_bar = () => {
  const { toggleColorMode } = useColorMode();
  return (
    <div className="m-0 p-0">
      <img
        src={LOGO}
        alt="Luna"
        className={`
          ${logo.width_and_height}
          ${logo.center}
          ${logo.margin}
          ${logo.padding}
          ${logo.cursor_pointer}
          ${logo.hover_brightness}
          ${logo.delay}
        `}
        onClick={toggleColorMode}
      />
    </div>
  );
};

export default Header_bar;
