
import './amazon_navbar.css'

export function Amazon_Navabr() {
    return (

        <nav>
            <nav className=" navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                    <button data-bs-toggle="collapse" data-bs-target="#menu" className="navbar-toggler">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="menu">
                        <ul className="navbar-nav me-auto  mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link  text-light" > ALL</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light">Fresh</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link text-light"> MX Player</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" >Sell</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link text-light" >Bestsellers</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" >Today's Deals</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" >Mobiles</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light">Electronics</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light">New Release</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link text-light dropdown-item" >Prime

                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link text-light" >Fashion</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link text-light" >Home and Kitchen</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" >Customer Service</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </nav>
    )
}