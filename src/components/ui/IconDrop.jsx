import { useEffect, useState } from 'react';
import { useRef } from 'react';
import { getRealIcon } from '@/lib/utils';

export default function IconDrop({ tabIndex, children, icon, iconClass = '', overClass = '', linkClass = '' }) {
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
    const real_icon = getRealIcon(icon);

    console.log(overClass, '=', isHovered);
    return (
        <div ref={linkRef} className={`${linkClass} items-center dropdown dropdown-end`}
            onMouseOver={() => setIsHovered(true)} onMouseOut={() => setIsHovered(false)}>
            <span tabIndex={tabIndex} className={`${iconClass} material-symbols-rounded`} ref={spanRef}>{real_icon}</span >
            {children}
        </div>
    )
}