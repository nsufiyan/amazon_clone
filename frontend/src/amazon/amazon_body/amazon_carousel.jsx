


export function Amazon_Carousel() {


    return (
        <div>

            <div id="carouselExampleControls" className="carousel slide"  data-bs-ride="carousel" data-bs-interval="2000">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/shrey/google/newPC_PB_LIVE_ASIN-Google-smart-watches_Unrec_2x._CB799730314_.jpg" className="d-block w-100 " style={{height:"300px"}}/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/2025/Jupiter25/GW/ME/UR/D298880126_IN_WLA_Jupiter_Hero_Banners_Unrec_PC_PB_LIVE_ASIN_3000x1200._CB800959465_.jpg" className="d-block w-100" style={{height:"300px"}} />
                    </div>
                    <div className="carousel-item">
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG25/Home/2025/GW/Jupiter/Phase1/Event/Heros/UNREC/03-Bulbs-tubelights--more._CB799224144_.jpg" className="d-block w-100" style={{height:"300px"}} />
                    </div>
                      <div className="carousel-item">
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/Img25/Consumables/Grocery/Jup25/SVD/PC_PB_PEA_Lifestyle_3000x1200_011._CB799961651_.jpg" className="d-block w-100" style={{height:"300px"}} />
                    </div>

                </div>
                <button className="carousel-control-prev" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                   
                </button>
                <button className="carousel-control-next" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>
                   
                </button>
            </div>

        </div>

    )
}