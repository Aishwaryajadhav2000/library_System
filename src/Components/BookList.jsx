// Components/BookList.js
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { additem } from "../utils/bookSlice"
import Book from "../Components/Book"


const BookList = ({ booksData }) => {
    const reduxBooks = useSelector((store) => store.book.items);

    const allBooks = [...booksData, ...reduxBooks];

    const dispatch = useDispatch();


    function addtocart(item) {
        dispatch(additem(item))

    }




    return (
        <div className="book-list">
            {allBooks.map((book, index) => (

                <Link to={`/bookdetails/${book.id}`}>
                    <Book key={book.id} bookDetails={book} />
                </Link>

                // <section className='book-card '>
                //     <article className='card'>
                //         <h2 className='book-id heading'>{book.title} - <b> {book.genre}</b></h2>
                //         <hr />
                //         <p className='book-description'>{book.description}</p>
                //         <br /><p className='book-publicsher'>Book Published By - <b>{book.author}</b>  in the year of <b>{book.published_year}</b>  </p>
                //         <p className='book-publicsher'>Language - <b>{book.language}</b> </p>
                //         <div>
                //             <div className='pricebtn'>
                //                 <h2 >Price - <b>{book.price}</b></h2>
                //                 <Link to={`/cart`} >
                //                     <button onClick={() => addtocart(book)} className='add-cartbtn btns'>Add to cart</button>
                //                 </Link>
                //             </div>

                //         </div>

                //     </article>
                // </section>







            ))}
        </div>

        // <div key={index} className="book-item">
        //     <h3>{book.title}</h3>
        //     <p>{book.author}</p>
        // </div>


        // <div>
        //     {allBooks.map((book)=>{
        //         <Book key={book.id} bookDetails={book} />
        //     })}
        // </div>
    );
};

export default BookList;
