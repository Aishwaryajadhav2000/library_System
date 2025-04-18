import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddBooks from './Components/AddBooks';
import Error from './Components/Error';
import Searchbook from './Components/Searchbook';
import Cart from "./Components/Cart"
import BookDetails from './Components/BookDetails';
import BrowseBooks from './Components/BrowseBooks';

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    // {
    //   path: "/",
    //   element:<BrowseBooks/>
    // },
    children :[
      {
          path:"/",
          element:<Searchbook/>
      },
      {
        path:"/AddBook",
        element:<AddBooks/>
      },
      
      {
        path:"/bookdetails/:id",
        element:<BookDetails/>
      },
      // {
      //   path:"/BookList",
      //   element:<BookList/>
      // },
      // {
      //   path:"/Contact",
      //   element:<Contact/>
      // },
      {
        path:"/cart",
        element:<Cart/>
      }
    ],
    errorElement : <Error/>
  },
  
])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
       <RouterProvider router={appRouter}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
