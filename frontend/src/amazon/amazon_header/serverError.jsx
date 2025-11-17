import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function ServerErrorPage() {
    const navigate = useNavigate();


    const handleRetry = () => {
        // Try hitting a known backend endpoint
        axios.get("http://localhost:5050/api/health")
            .then(() => {
                // Backend is back — navigate to home
                navigate("/home");
            })
            .catch(() => {

            });
    };

    useEffect(() => {
        axios.get("http://localhost:5050/api/health")
            .then(() => {
                // Backend is back — navigate to home
                navigate("/home");
            })
            .catch(() => {
                console.log("Server down");
            });
    }, [navigate])


    return (
        <div className="d-flex justify-content-center align-items-center flex-column"
            style={{ height: "700px" }}>
            <h1>500 - Server Error</h1>
            <p>We’re having trouble connecting to the server. Please try again later.</p>
            <div><img src="/server_error.png" alt="Server Error" style={{ maxWidth: "400px" }} /></div>
            <button
                onClick={handleRetry}
                className="btn btn-outline-primary mt-3"
            >
                Retry Connection
            </button>
        </div>
    );
}