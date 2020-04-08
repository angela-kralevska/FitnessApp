import React from 'react';
import {Link} from "react-router-dom";

const Header = (props) => {
    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark navbar-fixed bg-dark">
                <a className="navbar-brand" href="#">Фитнес студио Фит</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                        aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to={"/cardInfos"}>Инфо за картички</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/members"}>Членови</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/visits"}>Посети</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/cards"}>Картички</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/payments"}>Плаќање</Link>
                        </li>
                    </ul>
                    <form className="form-inline mt-2 mt-md-0 ml-3">
                        <Link className="btn btn-outline-info my-2 my-sm-0" to={"/home"}>Одлогирај се</Link>
                    </form>

                </div>
            </nav>
        </header>
    )
}
export default Header;
