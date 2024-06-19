import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}


export function getRealIcon(icon) {
  let real_icon = '';
  switch (icon) {
    case 'new':
      real_icon = 'open_in_new';
      break;
    case 'bell':
      real_icon = 'notifications';
      break;
    case 'menu':
    case 'apps':
      real_icon = icon;
      break;
    case 'user':
      real_icon = 'account_circle';
      break;
    default:
      break;
  }
  return real_icon;
}