import { Link, useNavigate } from "react-router-dom";
import axiosInstance from '../../util/axiosInstance'
import { useState } from "react";



export function Amazon_SingIn() {
    const navigate = useNavigate();
    const [passVisibilit, setPassVisibility] = useState(false)
    function getUser(e) {
        e.preventDefault()
        const data = {};
        const formData = new FormData(e.target);
        for (let [key, value] of formData.entries()) {
            data[key] = value;
        }


        axiosInstance({
            method: "POST",
            url: "http://localhost:5050/api/get-user",
            data: data
        })
            .then((res) => {
                alert(res.data.message)
                if (res?.data?.success) {
                    localStorage.setItem("userData", JSON.stringify(res.data.data))
                    navigate("/")
                }
                else {
                    localStorage.clear();
                }

            })
            .catch((err) => {
                if (err) {
                    navigate("/server-error")
                    console.log(err)
                }
            })
    }


    return (

        <div className=" d-flex justify-content-center align-items-center " style={{ height: "600px" }}>


            <div className="card shadow" style={{ width: "400px", height: "450px" }}>
                <div className="text-center m-3 fs-5">
                    Sign in or create account
                </div>

                <div className="card-body">
                    <form onSubmit={getUser}>
                        <div>
                            <label className="form-label fw-bold ms-2">Enter mobile number</label>
                            <input className="form-control mt-0" required type="number" name="phone" />
                        </div>
                        <div>
                            <label className="form-label fw-bold ms-2 mt-2">Enter Password</label>
                            <input className="form-control mt-0 w-100" type={passVisibilit ? "text" : "password"} name="password" required />
                            <i className={passVisibilit ? "bi bi-eye position-absolute" : "bi bi-eye-slash position-absolute"} style={{ top: "205px", right: "30px" }} onClick={() => { setPassVisibility(!passVisibilit) }}></i>
                        </div>

                        <button className="btn btn-warning w-100 mt-3 mb-2" type="submit" >sing in</button>
                    </form>

                    <div><button className="btn btn-warning w-100 mt-3 mb-2" type="button" onClick={() => navigate("/login")}>create new account</button>
                    </div>
                    <span className="text-sm">By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</span><br></br>


                    <div>
                        <Link className=" mt-4 text-decoration-none " to="/home">Back to Home</Link>
                    </div>
                </div>


            </div >
        </div >
    )
}