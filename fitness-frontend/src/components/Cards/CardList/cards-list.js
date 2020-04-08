import React from 'react';
import { Link } from "react-router-dom";
import Card from "../Card/card";

const getCards = (props) => {
    const Cards = props.cards.map((card, index) => {
        return (
            <Card onDelete={props.onDelete} cardId={card.cardId} card={card} key={index} colClass={"col-md-6 mt-2 col-sm-12"}/>
        );
    });
    return (
        <div className="text-left">
            <h4 className="pl-2">Картички:</h4>
            <div className="table-responsive">
                <table className="table tr-history table-striped small">
                    {tableHead()}
                    <tbody>
                        {Cards}
                    </tbody>
                </table>
            </div>
            <Link className="btn btn-outline-secondary" to={"/cards/add"}>
                    <span><strong>Додај нова картичка</strong></span>
                </Link>
        </div>
    )
}

function tableHead() {
    return (
        <thead>
            <tr>
                <th scope="col">Шифра</th>
                <th scope="col">Датум за почеток</th>
                <th scope="col">Датум за крај</th>
                <th scope="col">Тип картичка</th>
                <th scope="col"></th>
            </tr>
        </thead>)
}

export default getCards;
