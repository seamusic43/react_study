
import { useState } from 'react';


export default function Simple_Modal(title, content) {
    const [showModal, setShowModal] = useState(false);
    const openModal = () => {
        setShowModal(prev => !prev);
    }
    let [modal_title, setTitle] = useState('Simple Modal');
    let [modal_content, setContent] = useState('Press ESC key or click the button below to close');
    setTitle(title);
    setContent(content);

    return (
        <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg">{modal_title}!</h3>
                <p className="py-4">{modal_content}</p>
                <div className="modal-action">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn" onClick={openModal}>Close</button>
                </div>
            </div>
        </dialog>
    );
}