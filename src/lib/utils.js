import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function getPlaceholder(name) {
  switch (name) {
    case 'email':
      return '이메일을 입력해주세요';
    case 'password':
      return '영문, 숫자, 특수문자를 포함한 8자 이상';
    case 'id':
      return '6자 이상 20자 이하';
    case 'phone':
      return '010-0000-0000';
    case 'business_number':
      return '123-45-67890';
    default:
      return '';
  }
}

export function getPattern(name) {
  switch (name) {
    case 'email':
      return '^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$';
    case 'password':
      return '^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,20}$';
    case 'id':
      return '^[a-zA-Z0-9]{6,20}$';
    case 'phone':
      return '^01(?:0|1|[6-9])(?:\\.{3}|\\.{4})\\.{4}$';
    case 'business_number':
      return '^([0-9]{3})-([0-9]{2})-([0-9]{5})$';
    default:
      return '';
  }
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