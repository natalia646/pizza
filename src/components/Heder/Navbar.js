import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
        <Link to ="/" className='home' ></Link>
      <Link to ="/basket" className='basket' >Basket</Link>
    </div>
  )
}

export default Navbar
