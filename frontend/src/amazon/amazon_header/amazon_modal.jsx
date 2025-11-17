
export function Amazon_Modal(props) {

    const userAddress = JSON.parse(localStorage.getItem("userData"))

    return (
        <div>
            <div className="modal" id="modal_id">
                <div className="modal-dialog " >
                    <div className="modal-content">
                        <div className="modal-header text-warning text-center">
                            <h4 > Choose Your Location  </h4>
                            <button className="btn-close border border-1" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body"><span>Select a delivery location to see product availability and delivery options</span>
                            <form onSubmit={props?.getuser} >                                <div>
                                <label className="form-label fw-bold ">Phone Number</label>
                                <input className="form-control mt-0 w-100" type="number" autoComplete="tel" required name="phone"></input>
                            </div>
                                <div>
                                    <label className="form-label fw-bold ">Address to be Updated</label>
                                    <input className="form-control mt-0 w-100" required type="text" name="address"></input>
                                </div>
                                {userAddress && userAddress.address ?
                                    <div className="modal-footer">
                                        <button className="btn btn-outline-warning" type="submit" >Apply</button>
                                    </div>
                                    :
                                    <div className="mt-3 text-center text-bg-danger">Please Sing in or Login to update the Address</div>
                                }
                            </form>

                        </div>



                    </div>

                </div>
            </div>
        </div >


    )
}