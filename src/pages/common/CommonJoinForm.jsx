import { useCallback, useContext, useReducer } from "react";
import { JoinProperty } from "./JoinProperty";
import LabelInput from "@/components/LabelInput";
import { validate, error_display } from "./reducer_User";
import { VendorJoinContext } from "@/pages/VendorJoin";


export default function CommonJoinForm() {
  //const [state, setState] = useState({
  //console.log(validate, error_display, typeof validate, typeof error_display)
  const [state, dispatch] = useReducer(validate, {
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
  //const [check_err, setCheckError] = useState({
  const [check_err, errDispatch] = useReducer(error_display, {
    id: '',
    password: '',
    email: '',
    phone: '',
    company_name: '',
    business_number: '',
  });

  const { validate_business_number } = useContext(VendorJoinContext);

  const onChange = useCallback((e) => {
    const { name, value, type, checked, pattern } = e.target;
    if (type in ['checkbox', 'radio']) {
      if (name in state.receive_agree) {
        dispatch({ type: 'set_value', name: 'receive_agree', value: { [name]: checked } });
      } else {
        dispatch({ type: 'set_value', name, value: checked });
      }
    } else {
      console.log(name, value, type, checked, pattern);
      if (pattern) {
        const regex = new RegExp(pattern);
        console.log('regex', regex.test(value), value, regex, pattern)
        if (!regex.test(value)) {
          // The input value is invalid
          errDispatch({ type: 'display_error', name, value: 'Invalid Input' });
          //return;
        } else {
          errDispatch({ type: 'display_error', name, value: 'OK' });
        }
      }
      if (name == 'business_number' && value.length == 12) {
        if (validate_business_number(value)) {

          errDispatch({ type: 'display_error', name, value: 'OK' });
        } else {
          errDispatch({ type: 'display_error', name, value: 'Invalid Business Number' });
        }
      }
      dispatch({ type: 'set_value', name, value });
    }
  }, []);

  return (
    <div>
      {JoinProperty.map((property, index) => {
        if (property.group) {
          return (
            <>
              <h1>{property.name}</h1>
              {property.group.map((group, group_idx) => {
                return <LabelInput key={group_idx} name={group.name} type={group.type} value={state[property.name][group.name]} onChange={onChange} />
              })}
            </>
          )
        } else {
          return <LabelInput key={index} name={property.name} value={state[property.name]} onChange={onChange} errorMsg={check_err[property.name] ? check_err[property.name] : ''} />
        }
      })}
    </div>
  );
}