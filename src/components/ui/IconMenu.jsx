import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { getRealIcon } from '@/lib/utils';


export function IconMenu({ children, icon, to = '', tabIndex = '', iconClass = '', overClass = '', linkClass = '' }) {
    const [isHovered, setIsHovered] = useState(false);
    const linkRef = useRef();
    const spanRef = useRef();

    useEffect(() => {
        if (overClass) {
            isHovered ? spanRef.current.classList.add(...overClass.split(' ')) : spanRef.current.classList.remove(...overClass.split(' '));
        }
    }, [isHovered, children, overClass]);

    const real_icon = getRealIcon(icon);

    if (to) {
        return (
            <Link to={to} ref={linkRef} className={linkClass}
                onMouseOver={() => setIsHovered(true)} onMouseOut={() => setIsHovered(false)}>
                <span className={`${iconClass} material-symbols-rounded`} ref={spanRef}>{real_icon}</span>
                {children}
            </Link>
        );
    } else if (tabIndex) {
        return (
            <div ref={linkRef} className={`${linkClass} items-center dropdown dropdown-end`}
                onMouseOver={() => setIsHovered(true)} onMouseOut={() => setIsHovered(false)}>
                <span tabIndex={tabIndex} className={`${iconClass} material-symbols-rounded`} ref={spanRef}>{real_icon}</span>
                {children}
            </div>
        );

    }
}