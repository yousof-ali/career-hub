import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import Jobj from './Components/Jobs/Jobj.jsx';
import Applied from './Components/Applied/Applied.jsx';
import Blog from './Components/Blog/Blog.jsx';
import Error from './Components/Error/Error.jsx';
import CommingSoon from './Components/CommingSoon/CommingSoon.jsx';
import JobDetails from './Components/JobDetails/JobDetails.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/jobs",
        element:<Jobj></Jobj>
      },
      {
        path:"/applied",
        element:<Applied></Applied>,
        loader:()=>fetch("../public/data/jobs.json")
      },
      {
        path:"/blogs",
        element:<Blog></Blog>
      },
      {
        path:"/apply",
        element:<CommingSoon></CommingSoon>
      },
      {
        path:"/job/:id",
        element:<JobDetails></JobDetails>,
        loader:()=>fetch("../public/data/jobs.json")
        
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
