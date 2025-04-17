import React from 'react'
import { Link } from 'react-router-dom'
import { additem } from '../utils/CartSlice';
import { useDispatch } from 'react-redux';

export default function Book(props) {
  const dispatch = useDispatch();

  function addtocart(item) {
    dispatch(additem(item))
  }

  // console.log("props", props)
  return (
    <div className='book-card '>

      <div className='card' >
        <h2 className='book-id heading'>{props.bookDetails.title} - <b> {props.bookDetails.genre}</b></h2>
        <hr />
        <p className='book-description'>{props.bookDetails.description}</p>
        <br /><p className='book-publicsher'>Book Published By - <b>{props.bookDetails.author}</b>  in the year of <b>{props.bookDetails.published_year}</b>  </p>
        <p className='book-publicsher'>Language - <b>{props.bookDetails.language}</b> </p>
        <div>
          <div className='pricebtn'>
            <h2 >Price - <b>{props.bookDetails.price}</b></h2>
            <Link to={`/cart`} >
              <button onClick={() => addtocart(props.bookDetails)} className='add-cartbtn btns'>Add to cart</button>
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}
