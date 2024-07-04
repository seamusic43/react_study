import { createContext } from "react";
import { Button } from "@/components/ui/button";
import CenterHeader from "@/components/CenterHeader";
import PasswordInput from "@/components/ui/PasswordInput";
import LabelInput from "@/components/LabelInput";

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

  const checkBusinessNumber = (e) => {
  }

  return (
    <>
      <div className="flex justify-center">
        <div className="center-content min-w-100 w-96 mb-8">
          <CenterHeader />
          <VendorJoinContext.Provider value={{ validate_business_number }}>
            <form name="vendor_join_form">
              <LabelInput title="아이디" name="id" type="text" />
              <PasswordInput title="비밀번호" name="password" />
              <PasswordInput title="비밀번호 확인" name="re_password" />
              <LabelInput title="이메일" name="email" type="text" />
              <LabelInput title="휴대폰번호" name="phone" type="phone" />
              <LabelInput title="회사명" name="company_name" type="text" />
              <div className="flex">
                <LabelInput title="사업자번호" name="business_number" type="text" areaClass="w-3/4 pr-3" />
                <Button onClick={checkBusinessNumber} type="button" className="w-1/4 mt-10 bg-neutral">확인</Button>
              </div>
              <LabelInput title="전체 동의" name="all_check" type="checkbox" areaClass="flex mb-4 mt-4 font-bold" />
              <LabelInput name="term_agree" type="checkbox" areaClass="flex text-sm mb-2" > 서비스 이용약관 동의(필수)</LabelInput>
              <LabelInput name="privacy_agree" type="checkbox" areaClass="flex text-sm mb-2" > 개인정보 수집 및 이용 동의(필수)</LabelInput>
              <LabelInput name="receive_agree" type="checkbox" areaClass="flex text-sm mb-2" > 프로모션 정보 수신 동의(선택)</LabelInput>
              <div className="flex ml-4 mb-4">
                <LabelInput name="email_agree" type="checkbox" areaClass="flex text-sm mb-2" > 이메일</LabelInput>
                <LabelInput name="sms_agree" type="checkbox" areaClass="flex text-sm ml-4 mb-2" > 문자</LabelInput>
              </div>
              <Button onClick={TryJoin} type="submit" className="w-full">가입하기</Button>
            </form>
          </VendorJoinContext.Provider>
        </div>
      </div>
    </>
  )
}