import React from 'react';
import {Link} from "react-router-dom";

const Header2 = (props) => {
    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-fixed">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                        aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <form className="form-inline mt-2 mt-md-0 ml-3">
                        <Link className="btn btn-outline-info my-2 my-sm-0" to={"/login"} >Логирај се</Link>
                    </form>

                </div>
            </nav>
        </header>
    )
}
export default Header2;
