import React, { Component } from "react";
import Moment from "react-moment";

class Visit extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.visit.visitId}</td>
                <td>{this.props.visit.date}</td>
                <td><Moment format={"hh:mm"} parse={"hh:mm:ss"}>
                        {this.props.visit.from}
                    </Moment></td>
                <td><Moment parse={"hh:mm:ss"} format={"hh:mm"}>
                        {this.props.visit.to}
                    </Moment></td>
                <td>{this.props.visit.locker.lockerId}</td>
                <td>{this.actions()}</td>
            </tr>
        );

    }

    actions() {
        return (
            <div>
                <button className="btn btn-sm btn-outline-secondary mx-1" onClick={() => this.props.onDelete(this.props.visit.visitId)}>
                    <span className="fa fa-remove" />
                    <span><strong>Избриши</strong></span>
                </button>

            </div>)

    }


}

export default Visit;