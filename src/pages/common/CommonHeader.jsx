import Logo from '@/components/Logo';
import LogoMini from '@/components/LogoMini';
import Icon from '@/components/ui/Icon';
import IconLink from '@/components/ui/IconLink';
import { Link } from 'react-router-dom';
import { IconMenu } from '@/components/ui/IconMenu';
import { useNavigate } from 'react-router-dom';

export default function CommonHeader() {
    const navigate = useNavigate();
    const clickLogout = () => {
        console.log('logout');
        localStorage.removeItem('token');
        navigate('/coggiri_login'); // 페이지 이동이 안되는데??
    }
    return (
        <header className="header mx-xl">
            <div className="container">
                <div className="flex items-center justify-between px-2 py-4 header__inner">
                    <div className="flex header__logo">
                        <IconLink to='/' icon='menu' iconClass='fi-large' />
                        <Logo />
                    </div>
                    <div className='flex'>
                        <div className="header__link">
                            <div className='flex items-center'>
                                <div className='border-solid border-slate-100 border-1'>
                                    <IconLink to='/vendor_join' icon='new' iconClass='fi-small' overClass='text-green-500'>거래처 가입</IconLink>
                                </div>
                                <div>
                                    <IconLink to='/vendor_join' icon='new' iconClass='fi-small' overClass='text-green-500'>거래처 어드민 경로</IconLink>
                                </div>
                            </div>
                        </div>
                        <div className="space-x-1 header__icon">
                            <IconMenu tabIndex={1} icon="apps" iconClass="fi-full pulse fi-large" overClass='bg-slate-200 rounded-md'>
                                <div tabIndex={1} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                    <div className="px-2 py-4 text-base font-bold border-b-2">코끼리 SCM</div>
                                    <div className="py-2"><Link to=''>사용 가이드</Link></div>
                                    <div className="py-2"><Link to='' >FAQ</Link></div>
                                    <div className="py-2"><Link to='' >문의하기</Link></div>
                                </div>
                            </IconMenu>
                            <IconMenu tabIndex={2} icon="bell" iconClass="fi-full fi-large" overClass='bg-slate-200 rounded-md' linkClass='indicator' >
                                <span className="text-xs indicator-item badge badge-secondary">2</span>
                                <div tabIndex={2} className="menu menu-sm dropdown-content mt-3 top-8 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                    <div className="px-2 py-4 text-base font-bold border-b-2">
                                        <div>알림</div>
                                    </div>
                                    <div className='alert_body'>
                                        <LogoMini />
                                    </div>
                                </div>
                            </IconMenu>
                            <IconMenu tabIndex={3} icon="user" iconClass="fi-full fi-large" overClass='bg-slate-200 rounded-md'>
                                <ul tabIndex={3} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                    <li className="px-2 py-4 text-base font-bold border-b-2">
                                        <div>회사명</div>
                                    </li>
                                    <li className="py-2"><Link to=''>계정 정보</Link></li>
                                    <li className="py-2"><Link to='' >사용 서비스</Link></li>
                                    <li className="py-2"><Link to='' >결제 내역</Link></li>
                                    <li className='py-4 border-t-2'><Link onClick={clickLogout} >로그 아웃</Link></li>
                                </ul>
                            </IconMenu>
                        </div>
                        <div>
                            <details className="dropdown">
                                <summary className="m-1 btn-outline btn btn-sm"><Icon title="language" /><span id="select_language">한국어</span></summary>
                                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                    <li><a>한국어</a></li>
                                    <li><a>English</a></li>
                                </ul>
                            </details>

                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}