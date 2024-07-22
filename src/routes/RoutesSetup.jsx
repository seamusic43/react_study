import { Routes, Route } from 'react-router-dom';
import Login from '../pages/common/Login';
import VendorJoin from '../pages/VendorJoin';
import MainLogin from '../pages/MainLogin';
import FindPassword from '../pages/FindPassword';
import FindId from '../pages/FindId';
import ResetPassword from '../pages/ResetPassword';
import Main from '../pages/Main';
import NotFound from '../pages/404';
import CommonLayout from '../pages/CommonLayout';
import RequireAuth from './Auth/RequireAuth';
import JoinSetting from '../pages/JoinSetting';


export default function RoutesSetup() {
  return (
    <Routes>
      <Route path='/' element={<CommonLayout />} >
        <Route index element={<RequireAuth><Main /></RequireAuth>} />
        <Route path="/login" element={<Login />} />
        <Route path="/vendor_join" element={<VendorJoin />} />
        <Route path="/join_setting" element={<JoinSetting />} />
      </Route>
      <Route path="/coggiri_login" element={<MainLogin />} />
      <Route path="/find_pw" element={<FindPassword />} />
      <Route path="/reset_pw" element={<ResetPassword />} />
      <Route path="/find_id" element={<FindId />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}