import { useState } from "react";
import { JoinProperty } from "./JoinProperty";
import LabelInput from "@/components/LabelInput";


export default function CommonJoinForm() {
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
            receive_email: false,
            receive_sms: false,
        },
    });
    const [check_err, setCheckError] = useState({
        id: '',
        password: '',
        email: '',
        phone: '',
        company_name: '',
        business_number: '',
    });

    const onChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            if (name in state.receive_agree) {
                setState({
                    ...state,
                    receive_agree: {
                        ...state.receive_agree,
                        [name]: checked,
                    }
                });
            } else {
                setState({
                    ...state,
                    [name]: checked,
                });
            }
        } else {
            setState({
                ...state,
                [name]: value,
            });
            //setCheckError({ id: 'test error' })
        }
    }


    return (
        <>
            {JoinProperty.map((property, index) => {
                console.log(property, index)
                if (property.group) {
                    return (
                        <>
                            <h1>{property.name}</h1>
                            {property.group.map((group, index) => {
                                console.log(group, group.name)
                                return <LabelInput key={index} property={group} state={state[property.name]} onChange={onChange} />
                            })}
                        </>
                    )
                } else {
                    return <LabelInput key={index} property={property} state={state} onChange={onChange} errorMsg={check_err[property.name] ? check_err[property.name] : ''} />
                }
            })}
        </>
    );
}