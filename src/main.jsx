import React from 'react'
import ReactDOM from 'react-dom/client'
import NotFound from './pages/404.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Login from './pages/common/Login.jsx'
import Join from './pages/common/Join.jsx'

const routes = [{
  path: '/',
  element: <Home />,
  errorElement: <NotFound />
},
{
  path: '/login',
  element: <Login />,
},
{
  path: '/join',
  element: <Join />,
},
];
const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
