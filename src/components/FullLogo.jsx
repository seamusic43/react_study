import Logo from "./Logo";
import LogoMini from "./LogoMini";

export default function FullLogo() {
    return (
        <div className="flex">
            <LogoMini />
            <Logo />
        </div>
    );
}