import React from 'react'
import { Books } from "../utils/mockData"
import BookList from "./BookList"
import { useState } from 'react';


export default function Searchbook() {

  const [searchBook, setSearchBook] = useState("");
  const [filteredbook, setFilteredBook] = useState(Books)
  const [searchByTitle, setSearchByTitle] = useState("")
  const bookscategories = [...new Set(Books.map(book => book.genre).filter(Boolean))];
  const [categorysearch, setCategorySearch] = useState("")

  function OnClickSearch() {
    if (searchByTitle == "Category") {
      const searchedbook2 = Books.filter((book) =>
        book.genre.toLowerCase().includes(searchBook.toLowerCase()))
      setFilteredBook(searchedbook2)

      setCategorySearch(setSearchBook)

      console.log("categorysearch", categorysearch)
    } else if (searchByTitle == "Title") {
      const searchedbook = Books.filter((book) =>
        book.title.toLowerCase().includes(searchBook.toLowerCase())
      )
      setFilteredBook(searchedbook)
    }

  }
  function searchbookfunc(value) {
    setSearchByTitle(value);
    console.log("setsearch", searchByTitle)
  }

  return (
    <div className='searchtab bodyspace'>

      {/* <select name="" id="" onChange={(e) => searchbookfunc(e.target.value)}>
        <option value="">Select</option>
        <option value="Title" >title</option>
        <option value="Category">Category</option>
      </select> */}

      {/* <div>
        {searchByTitle === "title" &&(
          <input placeholder="search" type="text" name="bboksearch" className="search"
            onChange={(e) => setSearchBook(e.target.value)} />
        )}

      </div> */}

      <div className='searching2'>
        <select name="" id="" onChange={(e) => searchbookfunc(e.target.value)} className='searchselect'>
          <option value="">Select Search Option</option>
          <option value="Title" >Title</option>
          <option value="Category">Category</option>
        </select>

        {searchByTitle === "Title" && (
          <input placeholder="search" type="text" name="bboksearch" className="search"
            onChange={(e) => setSearchBook(e.target.value)} />
        )}

        {searchByTitle === "Category" && (
          <select onChange={(e) => setSearchBook(e.target.value)} className='searchselect'>
            <option value="">Select Category</option>
            {bookscategories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        )}


        <button onClick={OnClickSearch} className='searchbtn btns' >Search</button>
      </div>


      {/* <div>
        <h1>{categorysearch}</h1>
      </div> */}

      <BookList booksData={filteredbook} key={filteredbook.id} />

    </div>
  )
}


