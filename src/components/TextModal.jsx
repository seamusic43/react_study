import { Button } from "./ui/button";


export default function TextModal({ id, open, onClose, modal_title, display_text, button_text = '', button_color, className }) {
  const size = className || 'w-11/12 max-w-5xl';
  console.log(display_text);
  return (
    <dialog id={id} open={open} className="modal">
      <div className={`${size} modal-box`}>
        <h3 className="text-lg font-bold" key={id}>{modal_title}</h3>
        <textarea className="w-full h-32 p-2 mt-2 border border-gray-300 rounded-md" readOnly value={display_text}></textarea>
        <div className="modal-action">
          <Button onClick={onClose} className={button_color}>{button_text}</Button>
        </div>
      </div>
    </dialog >
  );
} 
