import { useState } from "react";
import { JoinProperty } from "./JoinProperty";


export default function Join() {
    const [state, setState] = useState({
        id: '',
        password: '',
        email: '',
        phone: '',
        company_name: '',
        business_number: '',
        all_agree: false,
        service_agree: false,
        privacy_agree: false,
        promotion_agree: false,
        receive_agree: {
            email: false,
            sms: false,
        },
    });

    const onChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setState({
                ...state,
                [name]: checked,
            });
        } else {
            setState({
                ...state,
                [name]: value,
            });
        }
    }

    return (
        <label className="form-control w-full max-w-xs">
            {JoinProperty.map((property, index) => {
                console.log(property, index)
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
            })}
        </label>
    );
}