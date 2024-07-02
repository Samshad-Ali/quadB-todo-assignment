import React from 'react'
import { GiNotebook } from "react-icons/gi";

const Header = () => {
  return (
    <div className='h-20 bg-black/80 text-white p-4 flex items-center'>
      <h2 className='flex items-center gap-3 font-semibold text-lg'>Todo-App <GiNotebook size={30} /> </h2>
    </div>
  )
}

export default Header;