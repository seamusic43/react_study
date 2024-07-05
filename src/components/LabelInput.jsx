import React from 'react'
import { getPattern, getPlaceholder } from '@/lib/utils';


const LabelInput = ({ name, title, type, value, onChange, errorMsg = '', children, ...props }) => {
  const inputRef = React.useRef();
  const pattern = getPattern(name);
  const placeholder = getPlaceholder(name);
  if (!title) {
    title = name;
  }
  const is_after_title = ['checkbox', 'radio'].includes(type) || children;
  const title_html = (
    <div className="label">
      <span className="label-text">{title}</span>
    </div>
  );

  return (
    <div className={props.areaClass}>
      {is_after_title ? '' : title_html}
      <input type={type}
        onChange={onChange}
        name={name}
        ref={inputRef}
        onFocus={() => is_after_title ? '' : inputRef.current.classList.add('input-primary')}
        onBlur={() => is_after_title ? '' : inputRef.current.classList.remove('input-primary')}
        pattern={pattern}
        placeholder={placeholder}
        defaultChecked={type === 'checkbox' ? value : undefined}
        value={value}
        className={`${type === 'checkbox' ? 'mr-2' : 'input input-bordered w-full'} ${props.className ? props.className : ''}`} />
      {is_after_title ? (children ? children : title_html) : ''}
      {errorMsg ?
        <div className={`label pb-0 pt-1 ${errorMsg ? '' : 'invisible'} `}>
          <span className="label-text-alt error_msg">{errorMsg}</span>
        </div>
        : ''}
    </div>
  )
}

const MemoizedLabelInput = React.memo(LabelInput);
export default MemoizedLabelInput;
