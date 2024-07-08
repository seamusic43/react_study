import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useRef } from 'react';

// IconLink component , move link to icon click
export default function IconLink({ children, to, icon, iconClass = '', overClass = '', linkClass = '' }) {
    const [isHovered, setIsHovered] = useState(false);
    const linkRef = useRef();
    const spanRef = useRef();
    useEffect(() => {
        if (overClass) {
            if (isHovered) {
                if (children) {
                    linkRef.current.classList.add(...overClass.split(' '));
                } else {
                    spanRef.current.classList.add(...overClass.split(' '));
                }
            } else {
                if (children) {
                    linkRef.current.classList.remove(...overClass.split(' '));
                } else {
                    spanRef.current.classList.remove(...overClass.split(' '));
                }
            }
        }
    }, [isHovered, children, overClass]);
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
    console.log(overClass, to, '=', isHovered);
    const icon_html = real_icon ? <span className={`${iconClass} material-symbols-rounded`} ref={spanRef}> {real_icon}</span > : "";
    return <Link to={to} ref={linkRef} className={`${linkClass} items-center`} onMouseOver={() => setIsHovered(true)} onMouseOut={() => setIsHovered(false)}>{children}{icon_html}</Link>
}