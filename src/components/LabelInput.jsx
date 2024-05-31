

export default function LabelInput({ index, property, state, onChange }) {
    return (
        <div key={index}>
            <div className="label">
                <span className="label-text">{property.name}</span>
            </div>
            <input type={property.type} onChange={onChange} placeholder={property.placeholder} value={state[property.name]} className="input input-bordered w-full max-w-xs" />
            <div className="label">
                <span className="label-text-alt">{property.placeholder}</span>
            </div>
        </div>
    )
}