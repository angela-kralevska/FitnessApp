import React, { Component } from "react";

class CardInfo extends Component {
    render() {
        return (
            <div className={this.props.colClass}>
                <div className="card">
                    <div className="cardinfos">
                        <div className="card-header" style={{backgroundColor: "#76D7C4"}}>
                            <div className="row">
                                <div className="col-md-6 font-weight-bold">
                                    {this.props.cardInfo.name}
                                </div>
                            </div>
                        </div>
                        <div className="card-body" style={{backgroundColor: "#D1F2EB"}}>
                            <div className="row">
                                <div className="col-md-6 font-weight-bold"> Времетраење во денови:</div>
                                <div className="col-md-6">{this.props.cardInfo.durationInDays}</div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-md-6 font-weight-bold"> Неделен број на посети:</div>
                                <div className="col-md-6">{this.props.cardInfo.visitsInWeek}</div>
                            </div>
                        </div>
                        <div className="card-footer" style={{backgroundColor: "#A3E4D7"}}>
                            <div className="row">
                                <div className="col-md-6 font-weight-bold"> Цена:</div>
                                <div className="col-md-6">{this.props.cardInfo.price} денари</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );


    }


}

export default CardInfo;