import React from 'react';
import { Link } from "react-router-dom";
import Member from "../Member/member";
import FormSearch from "../../FormSearch/formSearch";

const getMembers = (props) => {
    const Members = props.members.map((member, index) => {
        return (
            <Member onDelete={props.onDelete} memberId={member.memberId} member={member} key={index} colClass={"col-md-6 mt-2 col-sm-12"}/>
        );
    });
    return (
        <div className="text-left">
            <h4 className="pl-2">Членови:</h4>
            <FormSearch onSearch={props.onSearch}/>
            <div className="table-responsive">
                <table className="table tr-history table-striped small">
                    {tableHead()}
                    <tbody>
                        {Members}
                    </tbody>
                </table>
            </div>
            <Link className="btn btn-outline-secondary" to={"/members/add"}>
                    <span><strong>Додај нов член</strong></span>
                </Link>
        </div>
    )
}

function tableHead() {
    return (
        <thead>
            <tr>
                <th scope="col">Шифра</th>
                <th scope="col">Име</th>
                <th scope="col">Презиме</th>
                <th scope="col">Адреса</th>
                <th scope="col">Телефон</th>
                <th scope="col">Последна уплата</th>
                <th scope="col"></th>
            </tr>
        </thead>)
}

export default getMembers;
