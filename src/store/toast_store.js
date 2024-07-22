import {create} from "zustand";

/*
interface ToastState {
  // toast 알림 목록입니다.
  toastList: ToastTypeOption[];
  addToastList: (elem: ToastTypeOption) => void;
  subtractToastList: (id: string) => void;
  // 해당 Toast에게 어떤 종류의 애니메이션을 실행할지 지정합니다.
  setAnimation: (id: string, type: ToastAnimationType) => void;
}
  */

const useToastStore = create()((set) => ({
  toastList: [],
  addToastList: (toast) =>
    set((state) => ({ toastList: [...state.toastList, toast] })),
  subtractToastList: (id) =>
    set((state) => ({
      toastList: state.toastList.filter((toast) => toast.id !== id),
    })),
  setAnimation: (id, type) =>
    set((state) => ({
      toastList: state.toastList.map((toast) => {
        if (toast.id === id) return { ...toast, animation: type };
        return toast;
      }),
    })),
}));
export { useToastStore };
