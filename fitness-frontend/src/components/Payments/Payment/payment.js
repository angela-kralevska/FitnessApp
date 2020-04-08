import React, { Component } from "react";

class Payment extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.payment.paymentId}</td>
                <td>{this.props.payment.date}</td>
                <td>{this.props.payment.employee.firstName} {this.props.payment.employee.lastName}</td>
                <td>{this.props.payment.card.cardInfo.name}</td>
                <td>{this.props.payment.member.firstName} {this.props.payment.member.lastName}</td>
                <td>{this.actions()}</td>
            </tr>
        );

    }

    actions() {
        return (
            <div>
                <button className="btn btn-sm btn-outline-secondary mx-1" onClick={() => this.props.onDelete(this.props.payment.paymentId)}>
                    <span className="fa fa-remove" />
                    <span><strong>Избриши</strong></span>
                </button>

            </div>)

    }


}

export default Payment;