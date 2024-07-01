import { getPlaceholder, getPattern } from '@/lib/utils';
import { useRef, useState } from 'react'

export default function PasswordInput({ value, title, className, onChange, name, errorMsg = '', ...props }) {
  const [visible, setVisible] = useState(false);
  const inputRef = useRef();
  const pattern = getPattern('password');
  const placeholder = getPlaceholder('password');
  const toggleVisibility = () => {
    console.log('password input toggleVisibility');
    inputRef.current.type = visible ? 'password' : 'text';
    setVisible(!visible);
  }
  const togglefocus = () => {
    console.log('password input togglefocus');
    //inputRef.current.addClass('input-primary');
    inputRef.current.parentNode.classList.add('input-primary');
    console.log(inputRef.current.classList)
  }
  const toggleBlur = () => {
    inputRef.current.parentNode.classList.remove('input-primary');
  }
  return (
    <>
      <div className="label">
        <span className="label-text">{title}</span>
      </div>
      <div className="flex items-center gap-2 input input-bordered">
        <input type="password"
          onChange={onChange}
          name={name}
          pattern={pattern}
          placeholder={placeholder}
          value={value}
          ref={inputRef}
          onFocus={togglefocus}
          onBlur={toggleBlur}
          className={`${className ? className : ''} w-full`} />
        <span className="material-symbols-rounded fi-full" onClick={toggleVisibility}>visibility{visible ? '_off' : ''}</span>
      </div>
      {errorMsg ?
        <div className={`label pb-0 pt-1 ${errorMsg ? '' : 'invisible'} `}>
          <span className="label-text-alt error_msg">{errorMsg}</span>
        </div>
        : ''}
    </>
  )
}
