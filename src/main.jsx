import React from 'react'
import ReactDOM from 'react-dom/client'
import LoginPage from './components/page/login'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SigninPage from './components/page/signin'
import UserPage from './components/page/users'
import BookPage from './components/page/book'
import ErrorPage from './components/page/error';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>This is home page of HuuDung</div>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/users",
    element: <UserPage></UserPage>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/books",
    element: <BookPage></BookPage>
  },
  {
    path: "/login",
    element: <LoginPage/>
  },
  {
    path: "/signin",
    element: <SigninPage></SigninPage>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>,
)

