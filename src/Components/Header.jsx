import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


export default function Header() {

  const cartItems = useSelector(store => store.cart.items)


  return (
    <>
      <div className='header'>

        <ul>

          {/* <a href="/"><li>Home</li></a> */}
          <Link to="/"><li>Home</li></Link>
          {/* <a href="/About"><li>About</li></a>
          <a href="/Contact"><li>ContactMe</li></a> */}
          {/* <a href="/AddBook"><li>AddBook</li></a> */}
          <Link  to={`/AddBook`}><li>Add Book</li></Link>
          <Link to={'/browseBooks'}><li>BrowseBooks</li></Link>
          
          <Link to="/cart"><li>Cart {cartItems.length}</li></Link>

        </ul>
      </div>
    </>

  )
}
