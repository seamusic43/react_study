import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import NotFound from './pages/404.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const routes = [{
  path: '/',
  element: <App />,
  errorElement: <NotFound />
}, {
  path: '/404',
  element: <NotFound />
}];
const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
