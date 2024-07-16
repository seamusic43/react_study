import { useCallback, useNavigate } from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
    const navigate = useNavigate();
    const goback = useCallback(() => {
        navigate(-1);
    }, [navigate]);
    return (
        <div className="text-xl text-center alert alert-error">
            <h1>404 Not Found</h1>
            <Link to="/">Go to Home</Link>
            <Link to={goback}>Go Back</Link>
        </div>
    );
}