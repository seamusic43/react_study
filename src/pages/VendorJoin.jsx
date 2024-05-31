import CommonJoinForm from "./common/CommonJoinForm"
import PageTitle from "@/components/ui/PageTitle"

export default function VendorJoin() {



    return (
        <div className="container">
            <PageTitle title="Vendor Join" />
            <form name="vendor_join_form">
                <CommonJoinForm />
            </form>
        </div>
    )
}