import { Link } from "react-router-dom"


export function PageNotFound() {

    return (
        <div className="d-flex justify-content-center align-items-center flex-column" style={{ height: "700px", width: "" }}>

            <div> <img src="/pageNotFound.png" /></div>

            <div className="mt-2">
                <Link to="/" className="text-decoration-none h5 text-primary">Back to Home</Link>
            </div>


        </div>
    )
}