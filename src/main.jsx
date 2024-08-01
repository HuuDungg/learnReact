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
import ErrorPage from './page/error';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>This is home page of HuuDung</div>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/home",
    element: <div>This is home page of HuuDung</div>
  },
  {
    path: "/users",
    element: <UserPage></UserPage>,
    children:[
      {
        index: true,
        element: <UserPage></UserPage>
      },
      {
        path: "/users/login",
        element: <LoginPage/>
      },
      {
        path: "/users/signin",
        element: <SigninPage></SigninPage>
      }
    ]
  },
  {
    path: "/products",
    element: <ProductPage></ProductPage>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>,
)

