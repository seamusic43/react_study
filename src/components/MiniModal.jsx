import { Button } from "./ui/button";


export default function MiniModal({ id, open, onClose, modal_title, description, button_text, button_color, className }) {
  const size = className || 'w-11/12 max-w-5xl';
  console.log(description);
  return (
    <dialog id={id} open={open} className="modal">
      <div className={`${size} modal-box`}>
        <h3 className="text-lg font-bold" key={id}>{modal_title}</h3>
        <p className="py-4 text-sm ">
          {description.split('\n').map((line, index) => (
            <>{line} < br /></>)
          )}
        </p>
        <div className="modal-action">
          <form method="dialog">
            <Button onClick={onClose} className={button_color}>{button_text}</Button>
          </form>
        </div>
      </div>
    </dialog >
  );
} 
