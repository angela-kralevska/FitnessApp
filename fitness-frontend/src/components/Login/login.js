import React from 'react'
import { Link, useHistory } from 'react-router-dom';

const Login = (props) => {

    const history = useHistory();

    const onFormSubmit = (e) => {
        e.preventDefault();
        const loggedEmployee = {
            "username": e.target.username.value,
            "password": e.target.password.value
        };
        props.onLogin(loggedEmployee);
        history.push("/cardInfos");
    }

    return (
        <div className="row">
            <form className="card " onSubmit={onFormSubmit} >
                <h4 className="text-upper">Логирај се</h4>
                <div className="form-group row">
                    <label htmlFor="username" className="col-sm-4 offset-sm-1 text-left">Корисничко име</label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" id="username"
                            name={"username"}
                            title="username" required/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="password" className="col-sm-4 offset-sm-1 text-left">Лозинка</label>
                    <div className="col-sm-6">
                        <input type="password" className="form-control" id="password"
                            name={"password"}
                            title="password" required/>
                    </div>
                </div>


                <div className="form-group row">
                    <div
                        className="offset-sm-1 col-sm-3  text-center">
                        <button
                            type="submit"
                            className="btn btn-primary text-upper">
                            Зачувај
                        </button>
                    </div>
                    <div
                        className="offset-sm-1 col-sm-3  text-center">
                        <Link to={"/home"}
                            className="btn btn-danger text-upper">
                            Откажи
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login;