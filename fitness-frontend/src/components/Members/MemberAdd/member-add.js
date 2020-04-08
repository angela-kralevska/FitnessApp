import React from 'react'
import { useHistory, Link } from 'react-router-dom';

const MemberAdd = (props) => {

    const history = useHistory();

    const onFormSubmit = (e) => {
        e.preventDefault();
        const newMember = {
            "memberId": e.target.memberId.value,
            "firstName": e.target.firstName.value,
            "lastName": e.target.lastName.value,
            "address": e.target.address.value,
            "phone": e.target.phone.value,
            "lastPaymentId": e.target.lastPaymentId.value
        };
        props.onNewMemberAdded(newMember);
        history.push("/members");
    }

    return (
        <div className="row">
            <form className="card " onSubmit={onFormSubmit} >
                <h4 className="text-upper">Додај Член</h4>
                <div className="form-group row">
                    <label htmlFor="memberId" className="col-sm-4 offset-sm-1 text-left">Шифра</label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" id="memberId"
                            name={"memberId"}
                            title="Member id title" required/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="firstName" className="col-sm-4 offset-sm-1 text-left">Име</label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" id="firstName"
                            name={"firstName"}
                            title="First name title" required/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="lastName" className="col-sm-4 offset-sm-1 text-left">Презиме</label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" id="lastName"
                            name={"lastName"}
                            title="Last name title" required/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="address" className="col-sm-4 offset-sm-1 text-left">Адреса</label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" id="address"
                            name={"address"}
                            title="Address title" required/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="phone" className="col-sm-4 offset-sm-1 text-left">Телефон</label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" id="phone"
                            name={"phone"}
                            title="Phone title" required />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="lastPaymentId" className="col-sm-4 offset-sm-1 text-left">Последна уплата</label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" id="lastPaymentId"
                            name={"lastPaymentId"}
                            title="Last payment id title" />
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
                        <Link to={"/members"}
                            className="btn btn-danger text-upper">
                            Откажи
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default MemberAdd;