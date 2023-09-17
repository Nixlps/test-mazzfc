import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import '../public/reset.scss';
import '../public/common.scss';

import HomePage from './pages/HomePage/HomePage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import ResultPage from './pages/ResultPage/ResultPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: 'search',
        element: <ResultPage />
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('app'));

root.render( <RouterProvider router={router} /> );

reportWebVitals(console.log);