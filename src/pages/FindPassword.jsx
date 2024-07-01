import CenterHeader from "@/components/CenterHeader";
import { Button } from "@/components/ui/button";
import LabelInput from "@/components/LabelInput";
import MiniModal from "@/components/MiniModal";
import { useState } from "react";

export default function FindPassword() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    const form = document.find_password_form;
    // API call to send email
    console.log(form.id.value, form.email.value, isModalOpen);
    if (form.id.value === '' || form.email.value === '') {
      alert('아이디와 이메일 주소를 입력해주세요.'); // toast change
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
            가입하신 아이디와 이메일 주소를 입력해주세요.<br />
            비밀번호를 재설정할 수 있는 링크가 포함된 이메일을 보내드립니다.<br />
            발송된 이메일의 비밀번호 재설정은 10분간 유효합니다.
          </div>
          <form name="find_password_form">
            <LabelInput name="id" title="아이디" type="text" className="mb-2" />
            <LabelInput name="email" title="이메일" type="email" className="mb-4" />
            <Button onClick={onSubmit} className="w-full mt-4 mb-2" size="lg">이메일 전송하기</Button>
          </form>
        </div>
      </div>
      {isModalOpen && <MiniModal id="send_ok" open={isModalOpen} onClose={() => setIsModalOpen(false)} modal_title="메일 전송 완료" description={"이메일로 비밀번호 재설정 링크를 전송했습니다.\n메일함을 확인해주세요."} button_text="확인" button_color="bg-primary" />}
    </>
  );
}