import React from 'react';
import { Link } from "react-router-dom";
import Visit from "../Visit/visit";

const getVisits = (props) => {
    const Visits = props.visits.map((visit, index) => {
        return (
            <Visit onDelete={props.onDelete} visitId={visit.visitId} visit={visit} key={index} colClass={"col-md-6 mt-2 col-sm-12"}/>
        );
    });
    return (
        <div className="text-left">
            <h4 className="pl-2">Посети:</h4>
            <div className="table-responsive">
                <table className="table tr-history table-striped small">
                    {tableHead()}
                    <tbody>
                        {Visits}
                    </tbody>
                </table>
            </div>
            <Link className="btn btn-outline-secondary" to={"/visits/add"}>
                    <span><strong>Додај нова посета</strong></span>
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
                <th scope="col">Од</th>
                <th scope="col">До</th>
                <th scope="col">Шкафче</th>
                <th scope="col"></th>
            </tr>
        </thead>)
}

export default getVisits;
