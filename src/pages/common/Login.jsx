import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Login() {
    return (
        <div>
            <h1>Login</h1>
            <form>
                <div>
                    <Label>id : </Label>
                    <Input type="text" placeholder="enter the id" />
                </div>
                <div>
                    <Label>password : </Label>
                    <Input type="password" placeholder="enter the password" />
                </div>
                <Button>Login</Button>
            </form>
        </div>
    );
}