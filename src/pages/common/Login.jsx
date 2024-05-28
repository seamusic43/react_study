import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import FileDrag from "@/pages/FileDrag";
import { Link } from "react-router-dom";

export default function Login() {
    const checkAvaliableId = (id) => {
        const idRegex = /^[a-zA-Z0-9!.-]+$/;
        return idRegex.test(id);
    }
    const checkId = () => {
        const inputId = '';
        if (this.checkAvaliableId(inputId)) {
            alert('Valid id');
        } else {
            alert('Invalid id');
        }
    }
    const checkPassword = () => {
        alert('check password');
    }
    const handleLoginClick = () => {
        alert('login');
        // Login try Backend API 
        checkId();
    }

    return (
        <div className="w-80">
            <h1>Login</h1>
            <form>
                <div>
                    <Input type="text" onChange={(e) => checkId()} placeholder="enter the id" />
                </div>
                <div>
                    <Input type="password" onChange={(e) => checkPassword()} placeholder="enter the password" />
                </div>
                <Button onClick={handleLoginClick}>Login</Button>
            </form>
            <div className="flex flex-row justify-around">
                <div className="flex">
                    <Input type="checkbox" name="autoLogin" id="autoLogin" /><Label htmlFor="autoLogin">Auto Login</Label>
                </div>
                <Link to="/findId">Forgot ID</Link> |   <Link to="/findPassword">Forgot Password</Link>
            </div>
            <div className="text-center">
                <span>계정이 없으신가요?</span>
                <Link to="/signup">Sign Up</Link>
            </div>
            <FileDrag />
        </div>
    );
}