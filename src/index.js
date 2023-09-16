import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import '../public/reset.scss';
import '../public/common.scss';

import Homepage from './pages/Homepage/Homepage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      // {
      //   path: "campanhas",
      //   element: <Campaings />,
      // },
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('app'));

root.render( <RouterProvider router={router} /> );

reportWebVitals(console.log);