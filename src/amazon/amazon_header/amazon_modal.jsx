

export function Amazon_Modal() {

    return (
        <div>
            <div className="modal" id="modal_id">
                <div className="modal-dialog ">
                    <div className="modal-content">
                        <div className="modal-header text-warning text-center">
                            <h4 > Choose Your Location  </h4>
                            <button className="btn-close border border-1" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">Select a delivery location to see product availability and delivery options
                        </div>
                        <div className="modal-footer">  Enter Indian Pincode
                            <input type="number"></input>
                            <button className="btn btn-outline-warning">Apply</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>


    )
}