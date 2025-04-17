import React from 'react'
import { useParams } from 'react-router-dom'
import { Books } from "../utils/mockData"

export default function BookDetails() {

  const params = useParams();
  // const existData = JSON.parse(localStorage.getItem("booksList")) || [];
  // const bookdetails = existData.filter(book => book.id == params.id)
  // console.log("this book details",bookdetails)
  console.log("params", params.id)
  const bookdetail = Books.filter(book => book.id == params.id)
  console.log("display book", bookdetail)

  const booktitle = bookdetail.map(book => book.title)
  console.log("booktitle", booktitle)




  return (
    <div>
      <h1 className='detailheading'>BookDetails</h1>
      <h2 className='detailheading'>{booktitle}</h2>
      

      <div className='book-card bookdetail'>
        {bookdetail.map((book) => {
          return (
            <div>
              <p className='book-id'>Title of the Book :  <b> {book.title}</b> </p>
              <p className='book-title'>{book.description}</p>
              <p>genre : <b>{book.genre}</b></p>
              <p className='book-publicsher'>Language <b>{book.language}</b> </p>
              <p>pages : <b>{book.pages}</b></p>
              <p>published Year : <b>{book.published_year}</b></p>
              <p>publisher : <b>{book.publisher}</b></p>
              <p>Price : <b> { book.price}</b></p>
              <p>Ratings : 
                <b> <li> GoodReads : {book.ratings.goodreads}</li>
                <li>Amazon : {book.ratings.amazon}</li>
                </b>
              </p>
              <p>Availability :
                {book.availability.paperback === true ? (
                  <b> Paperback</b>
                ) :
                  book.availability.ebook === true ? (
                    <b> Ebook</b>
                  ) :
                    book.availability.hardcover === true ? (
                      <b> Hardcover</b>
                    )
                      :
                      book.availability.paperback === true ? (
                        <b> Paperback</b>
                      )
                        : (
                          <b> Book is Not Available</b>
                        )}
              </p>
            </div>
          )

        })}


      </div>

    </div>
  )
}
