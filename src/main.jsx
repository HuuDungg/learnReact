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
import { AuthWrapper } from './components/context/auth.context';
import PrivateRoute from './components/page/private.route';

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
    element:
    <PrivateRoute>
        <BookPage/>
    </PrivateRoute>
     
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
  <AuthWrapper>
        <RouterProvider router={router} />
  </AuthWrapper>,
)

