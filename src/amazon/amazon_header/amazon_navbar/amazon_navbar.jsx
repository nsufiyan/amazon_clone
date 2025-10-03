
import './amazon_navbar.css'

export function Amazon_Navabr(){
    return(

        <div>
           <nav className=" navbar navbar-expand-lg navbar-dark">
            <div className="container-fluid">
            <button data-bs-toggle="collapse" data-bs-target="#menu" className="navbar-toggler">
            <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="menu">
                <ul className="navbar-nav me-auto  mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link  text-light" href="#"> ALL</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light" href="#">Fresh</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link text-light" href="#"> MX Player</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light" href="#">Sell</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link text-light" href="#">Bestsellers</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light" href="#">Today's Deals</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light" href="#">Mobiles</a>
                    </li>
                      <li className="nav-item">
                        <a className="nav-link text-light" href="#">Electronics</a>
                    </li>
                      <li className="nav-item">
                        <a className="nav-link text-light" href="#">New Release</a>
                    </li>
                      <li className="nav-item dropdown">
                        <a className="nav-link text-light dropdown-item" href="#">Prime
                        
                        </a>
                    </li>
                    
                      <li className="nav-item">
                        <a className="nav-link text-light" href="#">Fashion</a>
                    </li>
                     
                      <li className="nav-item">
                        <a className="nav-link text-light" href="#">Home and Kitchen</a>
                    </li>
                      <li className="nav-item">
                        <a className="nav-link text-light" href="#">Customer Service</a>
                   </li>

                </ul>
            </div>
            </div>
           </nav>
        </div>
    )
}