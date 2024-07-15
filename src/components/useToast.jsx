import { nanoid } from 'nanoid';
import { useToastStore } from '../store/toast_store';

const ANIMATION_TERM_TIME = 500;

export default function useToast() {
  const { addToastList, subtractToastList, setAnimation } = useToastStore();

  /**
   * Toast 알림창을 띄웁니다. 최대한 react-toastify와 비슷하게 만들어보려 했습니다.
   * usage
   * ```
   * const { toast } = useToast();
   * toast('들어갈 내용', {
   *       type: 'info',
   *       position: 'top-right',
   *       showCloseButton: false,
   *       autoClose: 2000,
   *     });
   * ```
   * @param content
   * @param option
   * type: info, success, warn, danger 4가지 타입이 존재합니다. 색상, 아이콘등이 다르게 출력 됩니다.
   * position: top-right, top-left, bottom-right, bottom-left 4가지 위치를 지정할 수 있습니다.
   * TODO: showCloseButton: 해당 toast 닫기 버튼을 클릭합니다.
   * autoClose: 자동으로 닫히는 시간을 설정합니다.
   */
  // : Omit<ToastTypeOption, 'content' | 'id' | 'animation'>
  const toast = (content, option) => {
    const toastId = nanoid();
    addToastList({ content, id: toastId, animation: null, ...option });

    let hideAnimationType = 'hide-top-right';

    switch (option.position) {
      case 'top-left':
        hideAnimationType = 'hide-top-left';
        break;
      case 'bottom-left':
        hideAnimationType = 'hide-bottom-left';
        break;
      case 'bottom-right':
        hideAnimationType = 'hide-bottom-right';
    }

    setTimeout(() => {
      setAnimation(toastId, hideAnimationType);

      // 애니메이션을 실행하기 위해 CSS를 통해 화면에서 사라지고, 실제로 데이터가 사라지기 사이에 시간을 준다.
      setTimeout(() => {
        setTimeout(() => {
          subtractToastList(toastId);
        }, ANIMATION_TERM_TIME);
      }, ANIMATION_TERM_TIME);
    }, option.autoClose - ANIMATION_TERM_TIME);
  };

  return { toast };
}