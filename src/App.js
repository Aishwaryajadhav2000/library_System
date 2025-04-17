import './App.css';
// import {Books} from "./utils/mockData"
// import BookList from './Components/BookList';
import { Provider } from "react-redux";
import appStore from './utils/appStore';
import { Outlet } from 'react-router-dom';
import Header from './Components/Header';
import { Link } from 'react-router-dom';

function App() {
  
  return (
    <Provider store={appStore} >


      <h1 className='hdr'>
        <span className='hdrs'>Welcome To Booknest</span>
        </h1>

      <Header /><br />

      {/* <BookList booksData={Books}/> */}

     <Outlet />


    </Provider>
  );
}

export default App;
