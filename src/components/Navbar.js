import React from 'react'
import logo from "./logo23.png"
const Navbar = () => {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <img src={logo} alt="" style={{ height: "45px", width: "45px", borderRadius: "0%" }} />
                    <a className="navbar-brand mx-2" href="/">Mom’s Kitchen</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                {/* <!-- Button trigger modal --> */}
                                <a href="#exampleModal" className="nav-link" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    About
                                </a>

                                {/* <!-- Modal --> */}
                                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h3 className="modal-title" id="exampleModalLabel">About us</h3>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <p style={{ fontSize: "25px" }}><b>"Life’s too short for boring food"
                                                </b></p>
                                                <p>When it comes to flavor and fragrant food,<b style={{ fontSize: "18px" }}> Mom's Kitchen </b> is one of the best in the world.</p>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;