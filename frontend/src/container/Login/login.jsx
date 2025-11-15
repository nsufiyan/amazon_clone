
import { useState } from "react";
import axiosInstance from "../../util/axiosInstance"
import { Link, useNavigate } from 'react-router-dom'
export function AmazonCreateAccount() {
    const [passVisibilit, setPassVisibility] = useState(false)
    const navigate = useNavigate();
    const handleClick = async (event) => {
        event.preventDefault()

        const data = {};
        const formData = new FormData(event.target);
        for (let [key, value] of formData.entries()) {
            data[key] = value;

        }


        axiosInstance({
            method: "post",
            url: "http://localhost:5050/api/login-user",
            data: data
        })
            .then((res) => {
                alert(res?.data?.message);
                navigate("/singin")
            })
            .catch((err) => {
                if (err) {
                    navigate("/server-error")
                    console.log(err)
                }
            })
    }

    return (

        <div className=" d-flex justify-content-center align-items-center " style={{ height: "750px" }}>

            <div className="card shadow-lg border border-1" style={{ width: "550px", height: "640px" }}>
                <div className="text-center m-3 fs-5">
                    Create account or <Link to="/singin" className=" ms-1 text-primary text-decoration-none">already have an account?</Link>
                </div>
                <div className="card-body s">
                    <form onSubmit={handleClick}>
                        <div>
                            <label className="form-label fw-bold "> Username:</label>
                            <input className="form-control mt-0 w-100" type="text" name="username" required></input>
                        </div>
                        <div>
                            <label className="form-label fw-bold ">Password:</label>
                            <input className="form-control mt-0 w-100" type={passVisibilit ? "text" : "password"} name="password" required />
                            <i className={passVisibilit ? "bi bi-eye position-absolute" : "bi bi-eye-slash position-absolute"} style={{ top: "195px", right: "30px" }} onClick={() => { setPassVisibility(!passVisibilit) }}></i>
                        </div>

                        <div>
                            <label className="form-label fw-bold "> First Name:</label>
                            <input className="form-control mt-0 w-100" type="text" name="fName" required></input>
                        </div>
                        <div>
                            <label className="form-label fw-bold ">Middle Name:</label>
                            <input className="form-control mt-0 w-100" type="text" name="mName"></input>
                        </div>
                        <div className="mt-3 mb-3 row">
                            <div className="col-6"> <label className="form-label fw-bold me-1">Mobile Number:</label>
                                <input className="combine form-control mt-0 w-100 me-2" id="password" type="number" name="phone" required></input></div>
                            <div className="col-6"> <label className="  form-label fw-bold ms-1"> Email:</label>
                                <input className=" combine form-control mt-0 w-100" type="email" name="email" id="email" ></input></div>
                        </div>
                        <div>
                            <label className="form-label fw-bold "> Address:</label>
                            <input className="form-control mt-0 w-100" type="text" name="address" required></input>
                        </div>
                        <div><button className="btn btn-warning w-100 mt-3 mb-2" type="submit">create account</button>
                        </div>
                    </form>

                </div>


            </div>
        </div>
    )
}