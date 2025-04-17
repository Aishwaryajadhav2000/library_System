// Components/AddBook.js
import { useDispatch } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import { insertItem } from "../utils/bookSlice";
import { Books } from "../utils/mockData";
import { useNavigate } from "react-router-dom";


const AddBook = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // const [title, setTitle] = useState("");
    // const [author, setAuthor] = useState("");

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     if (title && author) {
    //         dispatch(insertItem({ title, author }));
    //         setTitle("");
    //         setAuthor("");
    //     }

    // };
    // const handleSubmit = (e) => {
    //     dispatch(insertItem({ title, author }));
    // }

    function addBook(e) {
        e.preventDefault();

        if (e.target.title.value == "" || e.target.author.value == "" || e.target.published_year.value == ""
            || e.target.genre.value == "" || e.target.language.value == "" || e.target.description.value == ""
            || e.target.price.value == ""
        ) {
            alert("All fields are mandetory.. Please enter all the fields to Add book")
        } else {

            const newBook = {
                id: Books.length + 1,
                title: e.target.title.value,
                author: e.target.author.value,
                published_year: e.target.published_year.value,
                genre: e.target.genre.value,
                language: e.target.language.value,
                description: e.target.description.value,
                price: e.target.price.value
            }
            dispatch(insertItem( newBook ));

            // window.location.href = "/"
            console.log("newbook", newBook);
            navigate("/");

        }
    }

    return (
        // <form  className="add-book-form">
        //     <input
        //         type="text"
        //         value={title}
        //         placeholder="Book Title"
        //         onChange={(e) => setTitle(e.target.value)}
        //     />
        //     <input
        //         type="text"
        //         value={author}
        //         placeholder="Author"
        //         onChange={(e) => setAuthor(e.target.value)}
        //     />
        //     <Link to={`/`} >
        //       <button onClick={() => handleSubmit({ title, author })} className='add-cartbtn btns'>Add to list</button>
        //     </Link>
        // </form>
        <section >

            <article className="formsection" >
                <form action="" onSubmit={addBook}>
                    <div className="frmfield">
                        <div>
                            <label className="formfields">Add Title</label>
                            <br /><input type="text" placeholder='title' name="title" className=" formfields" />
                        </div>
                        <div>
                            <label className="formfields">Author Name</label>
                            <input type="text" placeholder='author' name="author" className="formfields" />
                        </div>
                    </div>


                    <section className="sectionform frmfield">
                        <div>
                            <label >Genre :</label>

                            <select name="genre" placeholder="hello">
                                <option value="NA">Select Genre</option>
                                <option value="HORROR">Horror</option>
                                <option value="THRILLER">Thriller</option>
                                <option value="ADVENTURE">Adventure</option>
                                <option value="LOVE STORY">LOVE STORY</option>
                                <option value="MYSTERY">MYSTERY</option>
                                <option value="ROMANCE">ROMANCE</option>
                                <option value="FANTACY">FANTACY</option>
                                <option value="HISTORICAL FICTION">HISTORICAL FICTION</option>
                                <option value="AUTOBIOGRAPHY">AUTOBIOGRAPHY</option>
                                <option value="SCIENCE FICTION">SCIENCE FICTION</option>
                            </select>
                        </div>
                        <div>
                            <label>Published Year</label>
                            <input type="number" placeholder='published_year' name="published_year" />
                        </div>
                    </section>

                    <section className="sectionform frmfield">
                        <div>
                            <label htmlFor="">Language</label>
                            <input type="text" placeholder='language' name="language" />
                        </div>
                        <div>
                            <label htmlFor="">Price</label>
                            <input type="number" placeholder='Price' name="price" />
                        </div>
                    </section>

                    <section className='description'>
                        <label className="formfields">Description</label>
                        <textarea name="description" placeholder="Enter "
                            className=" formfields"></textarea>

                    </section>


                    {/* <Link to={`/`}> */}
                    <div className="btn">
                    <button type='submit' className="submit">Submit</button>
                    </div>

                    {/* </Link> */}

                </form>
            </article>
            <article className="artcl"></article>
        </section>
    );
};

export default AddBook;
