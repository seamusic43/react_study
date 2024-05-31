

<label className="label cursor-pointer">
    <input type="checkbox" defaultChecked className="checkbox" />
</label>

export default function LabelInput({ index, property, state, onChange, errorMsg = '' }) {
    return (
        <div key={index}>
            <div className="label">
                <span className="label-text">{property.name}</span>
            </div>
            <input type={property.type}
                onChange={onChange}
                placeholder={property.type === 'text' ? property.placeholder : undefined}
                defaultChecked={property.type === 'checkbox' ? state[property.name] : undefined}
                value={state[property.name]}
                className={`${property.type == 'checkbox' ? '' : 'input input-bordered w-full'}`} />
            {errorMsg ?
                <div className={`label pb-0 pt-1 ${errorMsg ? '' : 'invisible'} `}>
                    <span className="label-text-alt error_msg">{errorMsg}</span>
                </div>
                : ''}
        </div>
    )
}