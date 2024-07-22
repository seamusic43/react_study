import AdminTitle from "@/components/AdminTitle";
import { Link } from "react-router-dom";
import useToast from "../components/useToast";
import { useCallback, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

export default function JoinSetting() {
  const [open_createModal, setOpen_createModal] = useState(false);
  const { toast } = useToast();
  const fileRef = useRef();
  const [selectedFile, setSelectedFile] = useState('');
  const [joinItems, setJoinItems] = useState([
    { id: 1, title: 'Name', display_name: '이름', required: 'YES', used: 'YES' },
  ]);
  const clipCopy = () => {
    const copyText = document.getElementById("join_link");
    copyText.select();
    document.execCommand("copy");
    toast('<span class="material-symbols-rounded"> task_alt </span>거래처 가입 페이지 링크 주소 복사 완료', { type: 'info', position: 'top-right', autoClose: 1500 });

  }
  const addModalOpen = () => {
    setOpen_createModal(true);
  };
  const closeModalOpen = () => {
    setOpen_createModal(false);
  };
  const addItem = () => {
    const itemForm = document.getElementById('joinItemForm');
    const title = itemForm.title.value;
    const display_name = itemForm.display_name.value;
    const required = itemForm.required.value;
    const used = itemForm.used.value;
    setJoinItems([...joinItems, { id: joinItems.length + 1, title: title, display_name: display_name, required: required, used: used }]);
    setOpen_createModal(false);
  }
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Check file size (1MB = 1048576 bytes)
      if (file.size > 1048576) {
        toast('파일 용량은 1Mb 이하로 올려주세요.', { type: 'warning', position: 'top-right', autoClose: 1500 });
        return;
      }
      // Check file type
      if (!['image/jpeg', 'image/jpg', 'image/gif', 'image/png'].includes(file.type)) {
        //alert('Invalid file type. Only jpg/jpeg/gif/png formats are allowed.');
        toast('사용할 수 없는 파일 타입입니다.', { type: 'warning', position: 'top-right', autoClose: 1500 });
        return;
      }
      setSelectedFile(file.name);
      // Optionally, update the UI to show a preview or file name
    }
  };
  const fileClick = (event) => {
    fileRef.current.click();
  }

  return (
    <div className="p-4">
      <div>
        <AdminTitle title="거래처 가입 설정"><Link className="ml-2 btn-xs btn" to="">가이드</Link></AdminTitle>
        <div className="mt-4 text-sm">
          거래처에 전달받고자 하는 항목을 설정하여 가입 페이지를 만들 수 있습니다.<br />
          가입 페이지 경로를 홈페이지, 쇼핑몰, SNS등 온라인 채널에 링크를 연결하여 거래처들에게 제공해보세요.
        </div>
        <div className="flex items-center justify-around px-6 py-4 mt-4 bg-gray-200 rounded-md">
          <div className="mr-8 font-bold">거래처 가입 페이지 링크 주소</div>
          <Link to="" className="text-sm">
            https://coggiri.com/ssb2bnetworks/join
            <input type="hidden" value="https://coggiri.com/ssb2bnetworks/join" id="join_link" />
          </Link>
          <div className="btn btn-sm btn-neutral" onClick={clipCopy}>
            경로 복사하기
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between w-full mt-4 ">
        <div className="w-1/2 p-4 border border-gray-200 rounded-md setting_area ">
          <div className="logo_area">
            <span className="text-sm">회사 로고 이미지</span>
            <input type="text" value={selectedFile} className="w-full input input-bordered " onClick={fileClick} readOnly />
            <input type="file" ref={fileRef} onChange={handleFileChange} className="hidden w-full" accept="image/jpeg, image/jpg, image/gif, image/png" />
            <span className="text-xs text-gray-500">권장 이미지 사이즈 400*300px,  jpg/jpeg/gif/png 형식,  1mb 이하 등록 가능</span>
          </div>

          <div className="w-full mt-4 item_area">
            <div className="flex items-center justify-between">
              <span className="text-sm">가입 항목 설정</span>
              <div className="btn btn-neutral btn-sm" onClick={addModalOpen}>
                <span className="material-symbols-rounded">add_circle</span>
                항목 추가</div>
            </div>
            <table className="table mt-2 text-sm rounded-md item_list">
              <thead className="py-2 text-center border item_header">
                <tr>
                  <th className="item_drag"></th>
                  <th className="f item_title">가입 항목</th>
                  <th className="item_type">노출항목명</th>
                  <th className="item_required">필수 여부</th>
                  <th className="item_use">사용 여부</th>
                  <th className="item_delete">삭제</th>
                </tr>
              </thead>
              <tbody className="item ">
                {joinItems.map((item, index) => (
                  <tr key={index} className="border ">
                    <td className="item_drag">
                      <span className="material-symbols-rounded">
                        drag_handle
                      </span>
                    </td>
                    <td className="item_title">{item.title}</td>
                    <td className="item_type">{item.display_name}</td>
                    <td className="item_required">{item.required == 'YES' ? '필수' : '선택'}</td>
                    <td className="item_use">{item.used == 'YES' ? '사용' : '미사용'}</td>
                    <td className="item_delete"><span className="material-symbols-rounded">
                      disabled_by_default
                    </span></td>
                  </tr>
                ))
                }
              </tbody>
            </table>
          </div>
          <div className="terms_area">
            <div className="mt-4 text-sm">이용약관 동의 약관</div>
            <textarea className="w-full p-2 mt-2 text-xs border rounded-md" name="terms" rows="5" placeholder="약관 내용을 입력해주세요."></textarea>
            <div className="mt-4 text-sm">개인정보수집 및 이용 동의 약관</div>
            <textarea className="w-full p-2 mt-2 text-xs border rounded-md" name="privacy" rows="5" placeholder="약관 내용을 입력해주세요."></textarea>
            <div className="flex justify-between mt-4 text-sm">
              <span>하단 - 안내 문구 노출</span>
              <div className="self-center" ><input type="checkbox" className="toggle toggle-primary" defaultChecked /> 사용함</div>
            </div>
            <textarea className="w-full p-2 mt-2 text-xs border rounded-md" name="footer_notice" rows="5" placeholder="노출하려는 문구를 입력해주세요."></textarea>

          </div>
          <Button className="w-full mt-4">저장하기</Button>

        </div>
        <div className="w-1/2 p-4 final_area">
          <span className="text-sm font-bold">가입 페이지 미리보기</span>
          <span className="text-xs text-gray-300"> 아래 이미지를 참고하여 가입 페이지를 만들어보세요.</span>

        </div>
      </div>
      {open_createModal &&
        <dialog open={open_createModal} className="modal">
          <div className="modal-box">
            <div className="modal-header">
              <div className="modal-title ">가입 항목 추가</div>
              <div className="text-sm text-gray-500"> 거래처 가입시 필요한 항목을 설정할 수 있어요.</div>
            </div>
            <div className="mt-4 modal-body">
              <form name="joinItemForm" id="joinItemForm">
                <div className="flex flex-col form-control">
                  <div className="flex mt-2">
                    <label className="w-1/3 label">
                      <span className="label-text">가입 항목</span>
                    </label>
                    <input type="text" placeholder="항목명을 입력해주세요." name="title" className="w-2/3 input input-bordered" />
                  </div>
                  <div className="flex mt-2">
                    <label className="w-1/3 label">
                      <span className="label-text">노출 항목명</span>
                    </label>
                    <input type="text" placeholder="노출 항목명을 입력해주세요." name="display_name" className="w-2/3 input input-bordered" />
                  </div>
                  <div className="flex mt-2 ">
                    <label className="w-1/3 label">
                      <span className="label-text">필수 여부</span>
                    </label>
                    <select className="w-2/3 select select-bordered" name="required">
                      <option value="YES">필수</option>
                      <option value="NO">선택</option>
                    </select>
                  </div>
                  <div className="flex mt-2">
                    <label className="w-1/3 label">
                      <span className="label-text">사용 여부</span>
                    </label>
                    <select className="w-2/3 select select-bordered" name="used">
                      <option value="YES">사용</option>
                      <option value="NO">미사용</option>
                    </select>
                  </div>
                  <div className="flex justify-end mt-4">
                    <Button variant="secondary" className="mr-2" onClick={closeModalOpen}>닫기</Button>
                    <Button onClick={addItem}>추가하기</Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </dialog>
      }
    </div >
  );
}