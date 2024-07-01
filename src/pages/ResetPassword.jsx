import CenterHeader from "@/components/CenterHeader";
import { Button } from "@/components/ui/button";
import LabelInput from "@/components/LabelInput";
import MiniModal from "@/components/MiniModal";
import { useState } from "react";
import PasswordInput from "@/components/ui/PasswordInput";

export default function ResetPassword() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 페이지 접근시 리셋 권한 체크 API 호출


  const onSubmit = (e) => {
    e.preventDefault();
    const form = document.reset_password_form;
    // API call to send email
    console.log(form.password.value, form.re_password.value, isModalOpen);
    if (form.password.value === '' || form.re_password.value === '') {
      alert('비밀번호를 입력해주세요.'); // toast change
      return false;
    } else {
      setIsModalOpen(true);
    }
    return false;
  }
  return (
    <>
      <div className="flex justify-center">
        <div className="center-content w-96">
          <CenterHeader />
          <div className="pb-4 text-sm text-left">
            새로운 비밀번호를 입력해주세요.<br />
            (영어, 숫자, 특수문자 조합 8자 이상)
          </div>
          <form name="reset_password_form">
            <div className='mb-2'>
              <label className='pb-2 label-text'>비밀번호</label>
              <PasswordInput name="password" type="password" />
            </div>
            <div className='mb-2'>
              <label className='pb-2 label-text'>비밀번호 확인</label>
              <PasswordInput name="re_password" type="password" />
            </div>
            <Button onClick={onSubmit} className="w-full mt-4 mb-2" size="lg">변경하기</Button>
          </form>
        </div>
      </div>
      {isModalOpen && <MiniModal id="send_ok" open={isModalOpen} onClose={() => setIsModalOpen(false)} modal_title="변경 완료" description={"비밀번호가 재설정되었습니다.\n로그인 해주세요.\n확인 클릭시 로그인 페이지로 이동합니다."} button_text="확인" button_color="bg-primary" />}
    </>
  );
}