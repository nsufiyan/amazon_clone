import { Link } from "react-router-dom";
import { Amazon_Modal } from "./amazon_modal";
import { Amazon_Footer } from "../amazon_footer/amazon_footer";
import { Amazon_Carousel } from "../amazon_body/amazon_carousel";
import { Amazon_Navabr } from "./amazon_navbar/amazon_navbar";
import { Amazon_Card } from "../amazon_body/amazon_cards/amazon_card";



export function Amazon_Home() {

    return (
        <div id="top">
            <div className="row bg-dark sticky-top ">
                <div className="col-md-1">
                    <Link to="/"><button className="btn btn-dark ms-1"><img height="50px" width="120px" className="border border-2" src="https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/2021-10/Amazon%20launches_1.jpg" /></button></Link>

                </div >

                <div className="col-md-2 mt-1 ms-0">
                    <button className="border border-light-subtle border-2 bg-dark text-light " data-bs-toggle="modal" data-bs-target="#modal_id"> Delivary to Bengaluru 562114 <span><b>Update Location <i class="bi bi-geo-alt-fill"></i></b></span> </button>



                </div>

                <div className="col-md-1">
                    <select className="form-select mt-2 border border-warning border-4 bg-dark text-light text-center" >
                        <option >ALL</option>
                        <option>Baby</option>
                        <option>Books</option>
                        <option>Car </option>
                        <option>Clothing</option>
                        <option>Mobiles</option>
                        <option>Deals</option>
                    </select>
                </div>
                
                <div className="col-md-3 ms-0">
                    <input className="form-control border border-warning border-4 mt-xl-2 " placeholder="Search Amazon.in" />
                </div>
            

                <div className="col-md-1" >
                    <select className="form-select mt-2 border border-warning border-4  bg-dark text-light text-center">
                        <option >English</option>
                        <option >हिन्दी-HI</option>
                        <option >ಕನ್ನಡ-KA</option>
                        <option >தமிழ்-TA</option>
                        <option>తెలుగు-TE</option>
                        <option>বাংলা-BE</option>
                    </select>
                </div>

                <div className="col-md-2">
                    <button className=" btn btn-warning mt-2 p-2"><Link to="singin" className="text-light text-decoration-none">Hello sing in Account and List</Link> </button>
                </div>

                <div className="col-md-1">
                    <button className=" btn text-light border border-2 ">Return and Order</button>
                </div>

                <div className="col-md-1">
                    <button className="btn text-light border border-2 mt-2 p-2 position-relative">
                        <span className="bi bi-cart"></span> Cart
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger ">0
                        </span>
                    </button>
                </div>

            </div>

            <Amazon_Modal />
            <Amazon_Navabr />
            <Amazon_Carousel />
            <Amazon_Card />
            <Amazon_Footer />
        </div>
    )
}