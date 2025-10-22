import { Link } from "react-router-dom";



export function Amazon_SingIn() {

    return (

        <div className=" d-flex justify-content-center align-items-center " style={{ height: "600px" }}>


            <div className="card" style={{ width: "400px", height: "400px" }}>
                <div className="text-center m-3 fs-5">
                    Sign in or create account
                </div>
                <label className="form-label fw-bold ms-4">Enter mobile number or email</label>
                <div className="card-body">
                    <input className="form-control mt-0"></input>
                    <div><button className="btn btn-warning w-100 mt-3 mb-2">Continue</button></div>
                    <span className="text-sm">By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</span><br></br>
                    <Link to="/">Back to home</Link>
                </div>
                <div className="card-footer ">
                    <span> Buying for work?</span><br />
                    <span >  Create a free business account</span>
                </div>

            </div>
        </div>
    )
}