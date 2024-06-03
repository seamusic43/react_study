import { useCallback, useState } from "react";
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

    const onChange = useCallback((e) => {
        const { name, value, type, checked, pattern } = e.target;
        if (type in ['checkbox', 'radio']) {
            if (name in state.receive_agree) {
                setState((state) => ({
                    ...state,
                    receive_agree: {
                        ...state.receive_agree,
                        [name]: checked,
                    }
                }));
            } else {
                setState((state) => ({
                    ...state,
                    [name]: checked,
                }));
            }
        } else {
            console.log(name, value, type, checked, pattern);
            if (pattern) {
                const regex = new RegExp(pattern);
                console.log('regex', regex.test(value), value, regex, pattern)
                if (!regex.test(value)) {
                    // The input value is invalid
                    console.log(name, 'error pattern', pattern, value);
                    setCheckError({ [name]: 'Invalid input' });
                    //return;
                } else {
                    setCheckError({ [name]: 'OK' });
                    console.log(name, 'okokok ');
                }

            }
            setState((state) => ({
                ...state,
                [name]: value,
            }));
            //setCheckError({ id: 'test error' })
        }
    }, []);


    return (
        <>
            {JoinProperty.map((property, index) => {
                if (property.group) {
                    return (
                        <>
                            <h1>{property.name}</h1>
                            {property.group.map((group, index) => {
                                return <LabelInput key={index} property={group} value={state[property.name][group.name]} onChange={onChange} />
                            })}
                        </>
                    )
                } else {
                    return <LabelInput key={index} property={property} value={state[property.name]} onChange={onChange} errorMsg={check_err[property.name] ? check_err[property.name] : ''} />
                }
            })}
        </>
    );
}