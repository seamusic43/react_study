import { useCallback, useReducer } from 'react';
import { validate, error_display } from './common/reducer_User';
import { Link } from 'react-router-dom';
import PasswordInput from '@/components/ui/PasswordInput';
import { Button } from '@/components/ui/button';


export default function MainLogin() {
    const [state, dispatch] = useReducer(validate, {
        login_id: '',
        password: '',
    });
    const [check_err, errDispatch] = useReducer(error_display, {
        login_id: '',
        password: '',
    });
    const onChange = useCallback((e) => {
        const { name, value, type, checked, pattern } = e.target;
            if (pattern) {
                const regex = new RegExp(pattern);
                if (!regex.test(value)) {
                    errDispatch({ type: 'display_error', name, value: 'Invalid Input' });
                } else {
                    errDispatch({ type: 'display_error', name, value: 'OK' });
                }
            }
            dispatch({ type: 'set_value', name, value });
    }, []);
    const tryLogin = useCallback((e) => {
        e.preventDefault();
        console.log('TryLogin');
        console.log(state);
    }, [state]);

    return (
        <div className="flex justify-center">
            <div className='center-content w-96'>
            <div className='xl:mt-40 mt-10 mb-10    '>
                <div className='flex mb-2'>
                    <img src="./public/coggiri_logo2_100.png" />
                    <img src="./public/logo_text.png" />
                </div>
                <span className='font-bold'>사업자끼리 함께. 코끼리 SCM</span>
            </div>
            <form name="main_login_form">
            <div className='pb-4'>
                <div className='mb-2'>
                <label className="label-text">아이디</label>
                <input type="text" name="login_id" className='input input-bordered w-full' />
                </div>
                <div className='mb-2'>
                <label className='label-text'>비밀번호</label>
                <PasswordInput name="login_password"/>
                </div>
            </div>
            <div>
                <Button onClick={tryLogin} className="w-full mb-2" size="lg">로그인</Button>
                <Button className="w-full" size="lg" variant="secondary"><Link to="/join">가입하기</Link></Button>
                
            </div>
            <div>
                <Link to="/find_id" className='text-sm'>아이디 찾기</Link> / <Link to="/find_pw" className='text-sm'>비밀번호 찾기</Link>
            </div>
            </form>
            </div>
        </div>
    );
}
