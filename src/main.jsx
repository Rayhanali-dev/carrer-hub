import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import ViewDetails from './components/ViewDetails/ViewDetails';
import Statistics from './components/Statistics/Statistics';
import Apply from './components/Apply/Apply';
import Blog from './components/Blog/Blog';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/apply',
        element: <Apply></Apply>,
        loader: () => fetch('/jobPosting.json')
      },
      {
        path: '/job/:detailsId',
        element: <ViewDetails></ViewDetails>,
        loader: () => fetch('/jobPosting.json')
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
