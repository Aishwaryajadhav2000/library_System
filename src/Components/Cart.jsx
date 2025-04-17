// Cart.js
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeItem } from "../utils/CartSlice";
import { useDispatch } from 'react-redux';
import { clearCart } from "../utils/CartSlice";


const Cart = () => {

  const dispatch = useDispatch();

  const items = useSelector((state) => state.cart.items);

  function remove(item) {
    console.log("remove item", item)
    dispatch(removeItem(item))
  }

  function clearCarts() {
    const confirmation = window.confirm("Are you sure you want to clear the cart?")
    if (confirmation) {
      dispatch(clearCart())

    }
  }


  return (
    <div >
      <h2 className="cartheading">Your Cart</h2>
      <section>

        {items.length === 0 ? (
          <article className="emptycart">
            <p>Cart is empty.</p>
            <p>Add Your Favourite Books in Cart</p>
          </article>
        ) : (
          <article className="itemcart">
            <div className="clrbtn">
              <h1>Total Books - {items.length}</h1>
              <button onClick={clearCarts} className='add-cartbtn btns clr'>Clear Cart</button>
            </div>
            <div className="cart">
              {items.map((item, index) => (
                <div key={index} className='book-card '>

                  <div className='card'>
                    <h2 className='book-id heading'>{item.title} - <b> {item.genre}</b></h2>
                    <hr />
                    <p className='book-description'>{item.description}</p>
                    <br /><p className='book-publicsher'>Book Published By - <b>{item.author}</b>  in the year of <b>{item.published_year}</b>  </p>
                    <p className='book-publicsher'>Language - <b>{item.language}</b> </p>
                    <div>
                      <div className='pricebtn'>
                        <h2 >Price - <b>{item.price}</b></h2>
                        <Link to={`/cart`} >
                          <button onClick={() => remove(item.id)} className='add-cartbtn btns'>Remove</button>
                        </Link>
                      </div>

                    </div>


                    {/* <p className='book-title'>{item.title}</p>
              <p className='book-publicsher'>{item.publisher}</p> */}
                  </div>

                </div>
              ))}
            </div>
          </article>
        )}
      </section>
    </div>
  );
};

export default Cart;
