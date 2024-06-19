import PageTitle from "@/components/ui/PageTitle"
import { createContext } from "react";
import { Button } from "@/components/ui/button";
import CommonHeader from "./common/CommonHeader";
import LeftMenu from "./common/LeftMenu";

export const VendorJoinContext = createContext();

export default function CommonLayout() {


    return (
        <>
            <CommonHeader />
            <div className="flex flex-col w-full lg:flex-row"   >
                <LeftMenu />
                <div className="flex justify-center max-w-min">
                    <div className="center-content min-w-100 w-96">
                        <PageTitle title="Vendor Join" />
                    </div>
                </div>
            </div>
        </>
    )
}