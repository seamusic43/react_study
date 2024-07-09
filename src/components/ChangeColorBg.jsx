
import { useState, useEffect, useRef, useCallback } from "react";


export default function ChangeColorBg({ children, color = '', bg_color = '', className = '' }) {
  const textRef = useRef();
  const [original, setOriginal] = useState({ color: '', bg_color: '' });
  useEffect(() => {
    // Assuming the element might have only one bg- class initially
    const currentClasses = textRef.current.className.split(' ');
    const originalBg = currentClasses.find(c => c.startsWith('bg-'));
    const originalText = currentClasses.find(c => c.startsWith('text-') && !c.startsWith('text-opacity-') && !c.startsWith('text-center'));
    setOriginal({ color: originalText || '', bg_color: originalBg || '' });
  }, []);

  const ChangeMouseOut = useCallback((e) => {
    color && textRef.current.classList.remove('text-' + color);
    bg_color && textRef.current.classList.remove('bg-' + bg_color);
  }, [color, bg_color, original]);

  const ChangeMouseOver = useCallback((e) => {
    color && textRef.current.classList.add('text-' + color);
    if (bg_color) {
      original.bg_color ? textRef.current.classList.remove(original.bg_color) : '';
      textRef.current.classList.add('bg-' + bg_color);
    }
  }, [color, bg_color, original]);

  const eventHandlers = color || bg_color ? { onMouseOut: ChangeMouseOut, onMouseOver: ChangeMouseOver } : {};

  return (
    <span className={className} {...eventHandlers} ref={textRef}>
      {children}
    </span>
  );
}