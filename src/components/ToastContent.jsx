import { clsx } from "clsx";

function getAlertCss(type) {
  switch (type) {
    case 'info':
      return 'bg-blue-500 text-white';
    case 'success':
      return 'bg-green-500 text-white';
    case 'warning':
      return 'bg-yellow-300 text-black';
    case 'danger':
      return 'bg-red-500 text-white';
    default:
      return 'bg-gray-300 text-black';
  }
}

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
        <div role="alert" key={item.id} className={`alert-${item.type} ${getAlertCss(item.type)} alert  animate-fade-left animate-once animate-duration-[3000ms] animate-ease-in-out animate-normal animate-fill-forwards `}
          dangerouslySetInnerHTML={{ __html: item.content }}
        />
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