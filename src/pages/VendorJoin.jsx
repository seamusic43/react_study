import CommonJoinForm from "./common/CommonJoinForm"
import PageTitle from "@/components/ui/PageTitle"
import { createContext } from "react";
import { Button } from "@/components/ui/button";

export const VendorJoinContext = createContext();

export default function VendorJoin() {


  /*
  const useReducer = (reducer, initialState) => {
  }
  */
  const validate_business_number = (business_number) => {
    // Business number validation
    const regex = new RegExp('^[0-9]{3}-[0-9]{2}-[0-9]{5}$');
    if (regex.test(business_number)) {
      const valueMap = business_number.replace(/-/gi, '').split('').map(function (item) {
        return parseInt(item, 10);
      })
      if (valueMap.length == 10) {
        const multipliers = [1, 3, 7, 1, 3, 7, 1, 3, 5];
        let checkSum = 0;
        for (let i = 0; i < 9; i++) {
          checkSum += valueMap[i] * multipliers[i];
        }
        checkSum += Math.floor(valueMap[8] * 5 / 10);
        return Math.floor(10 - (checkSum % 10)) === valueMap[9];
      } else {
        return false;
      }
    }
    return false;
  }




  const TryJoin = (e) => {
    e.preventDefault();
    console.log('TryJoin');
    const form = document.forms.vendor_join_form;
    const formData = new FormData(form);
    for (let key of formData.keys()) {
      if (key === 'business_number') {
        if (validate_business_number(formData.get(key))) {
          console.log('business_number is valid');
        } else {
          console.log('business_number is invalid');
          //setCheckError({ [key]: 'wrong businees number' });
          return false;
        }
      }
      console.log(key, formData.get(key));
    }
  }


  return (
    <>
      <div className="flex justify-center">
        <div className="center-content min-w-100 w-96">
          <PageTitle title="Vendor Join" />
          <VendorJoinContext.Provider value={{ validate_business_number }}>
            <form name="vendor_join_form">
              <CommonJoinForm />
              <Button onClick={TryJoin} type="submit">Join</Button>
            </form>
          </VendorJoinContext.Provider>
        </div>
      </div>
    </>
  )
}