import { Link } from "react-router-dom";
import { useState } from "react";

const menu_items = [
    {
        title: '거래처',
        icon: 'group',
        submenus: [
            {
                title: '거래처 가입 설정',
                link: '/join_setting',
            },
            {
                title: '거래처 관리',
                link: '/',
            },
            {
                title: '문의 관리',
                link: '/',
            },
            {
                title: '공지 관리',
                link: '/',
            },
        ]
    },
    {
        title: '발주',
        icon: 'assignment',
        submenus: [
            {
                title: '거래처별 발주현황',
                link: '/',
            },
            {
                title: '통합 발주 관리',
                link: '/',

            },
            {
                title: '출고중지 요청',
                link: '/',
            },
            {
                title: '교환 관리',
                link: '/',
            },
            {
                title: '반품 관리',
                link: '/',
            },
            {
                title: '개별 발주 등록',
                link: '/',
            },
            {
                title: '엑셀 발주 등록',
                link: '/',
            },
        ]
    },
    {
        title: '정산',
        icon: 'event_available',
        submenus: [
            {
                title: '월별 정산 현황',
                link: '',
            },
            {
                title: '거래처별 정산 관리',
                link: '/',
            },
        ]
    },
    {
        title: '설정',
        icon: 'settings',
        submenus: [
            {
                title: '배송 설정',
                link: '',
            },
            {
                title: '알림 설정',
                link: '',
            },
            {
                title: '계정 설정',
                link: '',
            },
        ]
    },
    {
        title: 'C 스토어',
        icon: 'drive_file_move',
        submenus: [
            {
                title: '스토어 홈',
                link: '/',
            },
            {
                title: '사용 서비스',
                link: '',
            },
            {
                title: '결제 내역',
                link: '',
            },
        ]
    },
];

export default function LeftMenu() {
    const [select_link, setSelectLink] = useState('/');
    const [select_menu, setSelectMenu] = useState('');
    const setMenu = () => {
        const chk_menu = menu_items.find(item => item.submenus.find(submenu => submenu.link === select_link));
        console.log(chk_menu.icon);
        setSelectMenu(chk_menu.icon);
    }
    const clickLink = (link) => {
        setSelectLink(link);
        //setMenu();
    }
    //setMenu();
    return (
        <div className="min-h-full w-60">
            <div id="menu_title">
                <div className="flex items-center font- bold font-lg">
                    회사명
                </div>
                <div className="color-gray-200 font-sm">
                    SCM Admin
                </div>
            </div>
            <div id="menu_list">
                <ul className="w-56 menu ">
                    {menu_items.map((item, index) => {
                        return (
                            <li key={index}>
                                <details open={item.icon === select_menu ? 'open' : null}>
                                    <summary>
                                        <span className="material-symbols-rounded">{item.icon}</span>
                                        {item.title}
                                    </summary>
                                    <ul>
                                        {item.submenus && item.submenus.map((submenu, subindex) => {
                                            return submenu.title ? (
                                                <li key={index + '_' + subindex}>
                                                    <Link to={submenu.link} onClick={() => clickLink(submenu.link)} className={select_link === submenu.link ? 'active' : ''}>{submenu.title}</Link>
                                                </li>
                                            ) : null;
                                        })}
                                    </ul>
                                </details>
                            </li>
                        );
                    })
                    }
                </ul>
            </div>
        </div>
    );
}