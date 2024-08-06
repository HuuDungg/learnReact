import React from 'react'
import ReactDOM from 'react-dom/client'
import LoginPage from './components/page/login'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import UserPage from './components/page/users'
import BookPage from './components/page/book'
import ErrorPage from './components/page/error';
import RegisterPage from './components/page/register';

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
    path: "/register",
    element: <RegisterPage></RegisterPage>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>,
)

