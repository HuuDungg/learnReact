import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <App/>
  },
  {
    path: "/login",
    element: <div>this is login page</div>
  },
  {
    path: "/signin",
    element: <div>this is signin page</div>
  },
  {
    path: "/users",
    element: <div>this is usera page</div>
  },
  {
    path: "/products",
    element: <div>this is products page</div>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

