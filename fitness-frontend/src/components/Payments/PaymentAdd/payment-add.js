import React from 'react'
import { useHistory, Link } from 'react-router-dom';

const PaymentAdd = (props) => {

    const history = useHistory();

    const onFormSubmit = (e) => {
        e.preventDefault();
        const newPayment = {
            "date": e.target.date.value,
            "cardId": e.target.cardId.value,
            "memberId": e.target.memberId.value,
            "employeeId": e.target.employeeId.value
        };
        props.onNewPaymentAdded(newPayment);
        history.push("/payments");
    }

    return (
        <div className="row">
            <form className="card " onSubmit={onFormSubmit}>
                <h4 className="text-upper">Додај Уплата</h4>
                
                <div className="form-group row">
                    <label htmlFor="date" className="col-sm-4 offset-sm-1 text-left">Датум</label>
                    <div className="col-sm-6">
                        <input type="date" className="form-control" id="date"
                            name={"date"}
                            title="Датум" required/>
                    </div>
                </div>
                
                <div className="form-group row">
                    <label htmlFor="cardId" className="col-sm-4 offset-sm-1 text-left">Картичка</label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" id="cardId"
                            name={"cardId"}
                            title="Картичка" required/>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="cardId" className="col-sm-4 offset-sm-1 text-left">Член</label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" id="memberId"
                            name={"memberId"}
                            title="Член" required/>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="cardId" className="col-sm-4 offset-sm-1 text-left">Вработен</label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" id="employeeId"
                            name={"employeeId"}
                            title="Вработен" required/>
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
                        <Link to={"/payments"}
                            className="btn btn-danger text-upper">
                            Откажи
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default PaymentAdd;