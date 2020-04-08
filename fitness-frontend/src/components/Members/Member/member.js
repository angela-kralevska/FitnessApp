import React, { Component } from "react";
import { Link } from "react-router-dom";

class Member extends Component {
    render() {
        return (
                <tr>
                    <td>{this.props.member.memberId}</td>
                    <td>{this.props.member.firstName}</td>
                    <td>{this.props.member.lastName}</td>
                    <td>{this.props.member.address}</td>
                    <td>{this.props.member.phone}</td>
                    <td>{this.props.member.lastPaymentId}</td>
                    <td>{this.actions()}</td>
                </tr>
        );

    }

    actions() {
        return (
            <div>
                <Link className="btn btn-sm btn-secondary mr-1"
                    to={"/members/" + this.props.member.memberId + "/edit"}><i
                        className="fa fa-pencil"><span><strong>Промени</strong></span></i></Link>
                 <button className="btn btn-sm btn-outline-secondary mx-1" onClick={()=>this.props.onDelete(this.props.memberId)}>
                    <span className="fa fa-remove" />
                    <span><strong>Избриши</strong></span>
                </button> 
                
            </div>)

    }


}

export default Member;