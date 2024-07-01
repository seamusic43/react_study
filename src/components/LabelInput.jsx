import React from 'react'
import { getPattern, getPlaceholder } from '@/lib/utils';


const LabelInput = ({ name, type, value, onChange, errorMsg = '' }) => {
  const inputRef = React.useRef();
  const pattern = getPattern(name);
  const placeholder = getPlaceholder(name);

  return (
    <div>
      <div className="label">
        <span className="label-text">{name}</span>
      </div>
      <input type={type}
        onChange={onChange}
        name={name}
        ref={inputRef}
        onFocus={() => inputRef.current.classList.add('input-primary')}
        onBlur={() => inputRef.current.classList.remove('input-primary')}
        pattern={pattern}
        placeholder={placeholder}
        defaultChecked={type === 'checkbox' ? value : undefined}
        value={value}
        className={`${type == 'checkbox' ? '' : 'input input-bordered w-full'}`} />
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
