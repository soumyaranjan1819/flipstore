import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className=' flex justify-center gap-10 text-2xl font-bold'>
        <Link to={'/'}>Home</Link>
        <Link to={'/cart'}>Cart</Link>
        <Link to={'/shop'}>Shop</Link>
        <Link to={'/wishlist'}>WishList</Link>
    </div>
  )
}

export default Navbar