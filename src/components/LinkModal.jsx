import TextModal from "./TextModal";
import { useState } from "react";

export default function LinkModal({ ...props }) {
  const modal_id = props.modal_id;
  const [is_get, setIsGet] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const modal_title = props.modal_title;
  const [display_text, setDisplayText] = useState('');

  const openModal = () => {
    if (is_get === false) {
      // get data from server
      setDisplayText('test' + modal_id);
      setIsGet(true);
    }
    console.log(is_get, display_text)
    setModalOpen(true);
  }

  const closeModal = (e) => {
    e.preventDefault();
    setModalOpen(false);
    return false;
  }
  console.log(modal_id, modal_title, display_text, modalOpen)

  // { id, open, onClose, modal_title, display_text, button_text, button_color, className }
  return (
    <>
      <a onClick={openModal} className="mr-1 underline">{modal_title}</a>
      <TextModal id={modal_id} modal_title={modal_title} display_text={display_text} open={modalOpen} button_text="확인" onClose={closeModal} />
    </>
  );
}