import React from 'react';
import { Link } from "react-router-dom";
import Payment from "../Payment/payment";

const getPayments = (props) => {
    const Payments = props.payments.map((payment, index) => {
        return (
            <Payment onDelete={props.onDelete} paymentId={payment.paymentId} payment={payment} key={index} colClass={"col-md-6 mt-2 col-sm-12"}/>
        );
    });
    return (
        <div className="text-left">
            <h4 className="pl-2">Уплати:</h4>
            <div className="table-responsive">
                <table className="table tr-history table-striped small">
                    {tableHead()}
                    <tbody>
                        {Payments}
                    </tbody>
                </table>
            </div>
            <Link className="btn btn-outline-secondary" to={"/payments/add"}>
                    <span><strong>Додај нова уплата</strong></span>
                </Link>
        </div>
    )
}

function tableHead() {
    return (
        <thead>
            <tr>
                <th scope="col">Шифра</th>
                <th scope="col">Датум</th>
                <th scope="col">Вработен</th>
                <th scope="col">Картичка</th>
                <th scope="col">Член</th>
                <th scope="col"></th>
            </tr>
        </thead>)
}

export default getPayments;
