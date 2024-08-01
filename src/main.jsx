import React from 'react'
import ReactDOM from 'react-dom/client'
import LoginPage from './page/login'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SigninPage from './page/signin'
import UserPage from './page/users'
import ProductPage from './page/products'

const router = createBrowserRouter([
  {
    path: "/home",
    element: <div>This is home page of HuuDung</div>
  },
  {
    path: "/login",
    element: <LoginPage/>
  },
  {
    path: "/signin",
    element: <SigninPage></SigninPage>
  },
  {
    path: "/users",
    element: <UserPage></UserPage>
  },
  {
    path: "/products",
    element: <ProductPage></ProductPage>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

