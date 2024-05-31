import CommonJoinForm from "./common/CommonJoinForm"
import PageTitle from "@/components/ui/PageTitle"

export default function VendorJoin() {



    return (
        <div className="flex justify-center">
            <div className="center-content min-w-100 w-96">
                <PageTitle title="Vendor Join" />
                <form name="vendor_join_form">
                    <CommonJoinForm />
                    <button className="btn btn-primary" type="submit">Join</button>
                </form></div>
        </div>
    )
}