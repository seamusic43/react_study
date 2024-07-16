import { createContext } from "react";
import CommonHeader from "./common/CommonHeader";
import LeftMenu from "./common/LeftMenu";
import { Outlet } from "react-router-dom";

export const VendorJoinContext = createContext();

export default function CommonLayout() {

  return (
    <>
      <CommonHeader />
      <div className="flex flex-col w-full lg:flex-row"   >
        <LeftMenu />
        <div className="w-full border-2 border-red-800 border-solid">
          <Outlet />
        </div>
      </div>
    </>
  )
}