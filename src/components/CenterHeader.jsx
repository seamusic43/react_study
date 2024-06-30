import Logo from './Logo';
import LogoMini from './LogoMini';

export default function CenterHeader() {
  return (
      <div className='mt-10 mb-10 xl:mt-40 '>
        <div className='flex mb-2'>
        <LogoMini />
        <Logo />
        </div>
        <span className='font-bold'>사업자끼리 함께. 코끼리 SCM</span>
      </div>
  );
}
