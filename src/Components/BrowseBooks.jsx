import React from 'react'
import { Books } from '../utils/mockData'
import { Link } from 'react-router-dom'
import { additem } from '../utils/CartSlice';
import { useDispatch } from 'react-redux';

export default function BrowseBooks() {

  const dispatch = useDispatch();
  
    function addtocart(item) {
      dispatch(additem(item))
    }
  
    // console.log("props", props)
    return (
      <div className='book-card '>
  
        <div className='card' >
          <h2 className='book-id heading'>{Books.title} - <b> {Books.genre}</b></h2>
          <hr />
          <p className='book-description'>{Books.description}</p>
          <br /><p className='book-publicsher'>Book Published By - <b>{Books.author}</b>  in the year of <b>{Books.published_year}</b>  </p>
          <p className='book-publicsher'>Language - <b>{Books.language}</b> </p>
          <div>
            <div className='pricebtn'>
              <h2 >Price - <b>{Books.price}</b></h2>
              <Link to={`/cart`} >
                <button onClick={() => addtocart(Books.bookDetails)} className='add-cartbtn btns'>Add to cart</button>
              </Link>
            </div>
  
          </div>
        </div>
      </div>
    )
}
