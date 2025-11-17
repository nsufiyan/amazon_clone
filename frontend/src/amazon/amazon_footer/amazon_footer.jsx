

import './amazon_footer.css'
export function Amazon_Footer() {

    return (
        <footer>

            <a href='#top' className='text-decoration-none' ><div className="back text-center text-light border border-1 border-secondary mb-1"> Back to top</div></a>

            <div className="main_footer d-flex justify-content-evenly">
                <div >
                    <span className='get fw-bold'> Get to Know Us</span>
                    <span className='get'>About Amazon</span>
                    <span className='get'>Carrer</span>
                    <span className='get'>Press Release</span>
                    <span className='get'> Amazon Science</span>

                </div>
                <div>
                    <span className='get fw-bold'> Connect With Us</span>
                    <span className='get'>Facebook</span>
                    <span className='get'>Twitter</span>
                    <span className='get'>Instagram</span>

                </div>
                <div >
                    <span className='get fw-bold'> Make Money With US</span>
                    <span className='get'>Sell on Amazon</span>
                    <span className='get'>Sell under Amazon Accelerator</span>
                    <span className='get'> Protect and Build Your Brand</span>
                    <span className='get'>Amazon Global Selling</span>
                    <span className='get'>   Supply to Amazon</span>
                    <span className='get'> Become an Affiliate</span>
                    <span className='get'>   Fulfilment by Amazon</span>


                </div>
                <div >
                    <span className='get fw-bold'>Let US Help You</span>
                    <span className='get'>Your Account</span>
                    <span className='get'>Return Center</span>
                    <span className='get'>100% Purchase Protection</span>
                    <span className='get'>Amazon App Download </span>
                    <span className='get'>Help</span>
                </div>
            </div>

            <div className="main_footer text-center text-light border border-1 border-secondary mb-1">


                <a href='#top' ><img src='https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/2021-10/Amazon%20launches_1.jpg' width="150px" className='m-3' /></a>
            </div>


        </footer>
    )
}