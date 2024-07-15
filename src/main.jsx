import React from 'react'
import ReactDOM from 'react-dom/client'
import NotFound from './pages/404.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Login from './pages/common/Login.jsx'
import VendorJoin from './pages/VendorJoin.jsx'
import MainLogin from './pages/MainLogin.jsx'
import CommonLayout from './pages/CommonLayout.jsx'
import FindPassword from './pages/FindPassword.jsx'
import FindId from './pages/FindId.jsx'
import ResetPassword from './pages/ResetPassword.jsx'
import Toast from './components/Toast.jsx'

const routes = [{
  path: '/',
  element: <Home />,
  errorElement: <NotFound />
},
{
  path: '/common',
  element: <CommonLayout />,
},
{
  path: '/login',
  element: <Login />,
},
{
  path: '/coggiri_login',
  element: <MainLogin />,

},
{
  path: '/find_pw',
  element: <FindPassword />,
},
{
  path: '/reset_pw',
  element: <ResetPassword />,
},
{
  path: '/find_id',
  element: <FindId />,
},
{
  path: '/vendor_join',
  element: <VendorJoin />,
},
];
const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toast />
  </React.StrictMode>,
)
