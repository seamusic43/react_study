import { clsx } from "clsx";

export default function ToastContent({ list, position, className = '' }) {
  let position_css = '';
  switch (position) {
    case 'top-right':
      position_css = 'toast-top toast-end';
      break;
    case 'top-left':
      position_css = 'toast-top toast-start';
      break;
    case 'bottom-right':
      position_css = 'toast-bottom toast-end';
      break;
    case 'bottom-left':
      position_css = 'toast-bottom toast-start';
      break;
    default:
      break;
  }
  return (
    <div className={`${position_css} toast font-normal tracking-wide leading-5 select-none`}>
      {/* Position-specific CSS Class */}
      {list.map(item => (
        <div key={item.id} className={`alert-${item.type} alert `}>
          {item.content}
        </div>
      ))}
    </div>
  );
};

/*
        <div key={item.id} className={clsx(styles.toastContent, item.animation ?? '', styles[item.type])}>
          {item.content}

        <div key={item.id} className={`alert-${item.type} alert ` + item.animation ?? ''}>
type ToastAnimationType =
  | "hide-top-right"
  | "hide-top-left"
  | "hide-bottom-right"
  | "hide-bottom-left"
  | null;
// Toast가 발생할 위치
type ToastPositionType =
  | "top-right"
  | "top-left"
  | "bottom-right"
  | "bottom-left";
interface ToastTypeOption {
  id: string;
  content: string;
  showCloseButton: boolean;
  position: ToastPositionType;
  type: "info" | "success" | "warn" | "danger";
  autoClose: number;
  animation: ToastAnimationType;
}*/