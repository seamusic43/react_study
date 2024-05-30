import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useCallback, useState, useRef } from "react";
import Simple_Modal from "@/components/Simple_Modal";
import RadioTest from "../RadioTest";
import FileDrag from "../FileDrag";
import { ValidatableInputMethods, ValidatableInput } from "@/components/ui/ValidatableInput";

export default function Login() {
    const [autoLogin, setAutoLogin] = useState(false);
    const [inputId, setInputId] = useState('');
    const [inputPassword, setInputPassword] = useState('');

    const checkAvaliableId = (id) => {
        const idRegex = /^[a-zA-Z0-9!.-]+$/;
        return idRegex.test(id);
    }
    const checkId = useCallback((e) => {
        setInputId(e.target.value);
    }, []);
    const checkPassword = useCallback((e) => {
        setInputPassword(e.target.value);
    }, []);

    const ValidatableInputMethod = useRef < ValidatableInputMethods > (null);
    const checkEmail = useCallback((e) => {
        console.log('email is', e.target.value, e);
        ValidatableInputMethod.current?.validate();
        //setInputPassword(e.target.value);
    }, [ValidatableInputMethod]);
    const handleLoginClick = (e) => {
        e.preventDefault();
        if (inputId === '') {
            Simple_Modal('Error', 'Please enter the id');
            alert('Please enter the id');
            return false;
        }
        if (inputPassword === '') {
            alert('Please enter the password');
            return false;
        }
        if (autoLogin && !confirm('Do you want to save your ID and password?')) {
            return false;
        }
        const formData = new FormData();
        formData.append('id', inputId);
        formData.append('password', inputPassword);
        console.log('form data is', JSON.stringify(Object.fromEntries(formData), null, 2));


        alert('login' + autoLogin + inputId + inputPassword);
        // Login try Backend API 
        if (checkAvaliableId(inputId)) {
            alert('Valid id');
        } else {
            alert('Invalid id');
        }
        return false;
    }

    return (
        <div className="w-80">
            <h1>Login</h1>
            <form name="login_form">
                <div>
                    <Input type="text" value={inputId} onChange={checkId} placeholder="enter the id" />
                </div>
                <div>
                    <Input ref={ValidatableInput} type="email" patten="/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i" onChange={checkEmail} placeholder="enter the email" />
                </div>
                <div>
                    <Input type="password" onChange={checkPassword} placeholder="enter the password" />
                </div>
                <Button onClick={handleLoginClick}>Login</Button>
            </form >
            <div className="flex flex-row justify-around">
                <div className="flex">
                    <Input type="checkbox" name="autoLogin" id="autoLogin" checked={autoLogin} onChange={(e) => { setAutoLogin(e.target.checked) }} /><Label htmlFor="autoLogin">Auto Login</Label>
                </div>
                <Link to="/findId">Forgot ID</Link> |   <Link to="/findPassword">Forgot Password</Link>
            </div>
            <div className="text-center">
                <span>계정이 없으신가요?</span>
                <Link to="/join">Sign Up</Link>
            </div>
            <RadioTest />
            <FileDrag />
        </div >
    );
}