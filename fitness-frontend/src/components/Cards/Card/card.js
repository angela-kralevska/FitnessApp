import React, { Component } from "react";

class Card extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.card.id}</td>
                <td>{this.props.card.startDate}</td>
                <td>{this.props.card.endDate}</td>
                <td>{this.props.card.cardInfo.name}</td>
                <td>{this.actions()}</td>
            </tr>
        );

    }

    actions() {
        return (
            <div>
                <button className="btn btn-sm btn-outline-secondary mx-1" onClick={() => this.props.onDelete(this.props.card.id)}>
                    <span className="fa fa-remove" />
                    <span><strong>Избриши</strong></span>
                </button>

            </div>)

    }


}

export default Card;