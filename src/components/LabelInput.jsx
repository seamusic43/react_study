import React from 'react'


const LabelInput = ({ index, property, value, onChange, errorMsg = '' }) => {
    console.log(property.name, value)
    return (
        <div key={index}>
            <div className="label">
                <span className="label-text">{property.name}</span>
            </div>
            <input type={property.type}
                onChange={onChange}
                name={property.name}
                pattern={property.pattern ? property.pattern : undefined}
                placeholder={property.type === 'text' ? property.placeholder : undefined}
                defaultChecked={property.type === 'checkbox' ? value : undefined}
                value={value}
                className={`${property.type == 'checkbox' ? '' : 'input input-bordered w-full'}`} />
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
