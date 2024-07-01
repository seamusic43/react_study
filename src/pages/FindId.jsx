import CenterHeader from "@/components/CenterHeader";
import LabelInput from "@/components/LabelInput";
import { Button } from "@/components/ui/button";
import MiniModal from "@/components/MiniModal";
import { useState } from "react";

export default function FindId() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    const form = document.find_id_form;
    // API call to send email
    console.log(form.email.value, isModalOpen);
    if (form.email.value === '') {
      alert('이메일 주소를 입력해주세요.'); // toast change
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
            가입하신 이메일 주소를 입력해주세요.<br />
            이메일 주소로 가입하신 아이디를 알려드립니다.
          </div>
          <form name="find_id_form">
            <LabelInput name="email" title="이메일" type="email" className="mb-4" />
            <Button onClick={onSubmit} className="w-full mt-4 mb-2" size="lg">이메일 전송하기</Button>
          </form>
        </div>
      </div>
      {isModalOpen && <MiniModal id="send_ok" open={isModalOpen} onClose={() => setIsModalOpen(false\)} modal_title="메일 전송 완료" description="이메일로 아이디를 전송했습니다." button_text="확인" button_color="bg-primary" />}
    </>
  );
} 