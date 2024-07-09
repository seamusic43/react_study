
import { useRef, useCallback } from "react";


export default function ChangeColorText({ children, color = '', className = '' }) {
  const textRef = useRef();

  const RemoveTextColor = useCallback((e) => {
    textRef.current.classList.remove('text-' + color);
  }, [color]);

  const AddTextColor = useCallback((e) => {
    textRef.current.classList.add('text-' + color);
  }, [color]);

  const eventHandlers = color ? { onMouseOut: RemoveTextColor, onMouseOver: AddTextColor } : {};

  return (
    <span className={className} {...eventHandlers} ref={textRef}>
      {children}
    </span>
  );
}