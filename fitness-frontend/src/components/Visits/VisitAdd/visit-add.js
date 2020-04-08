import React from 'react'
import { useHistory, Link } from 'react-router-dom';

const VisitAdd = (props) => {

    const history = useHistory();

    const onFormSubmit = (e) => {
        e.preventDefault();
        const newVisit = {
            "visitId": e.target.visitId.value,
            "date": e.target.date.value,
            "from": e.target.from.value,
            "to": e.target.to.value,
            "cardId": e.target.cardId.value,
            "lockerId": e.target.lockerId.value
        };
        props.onNewVisitAdded(newVisit);
        history.push("/visits");
    }

    return (
        <div className="row">
            <form className="card " onSubmit={onFormSubmit}>
                <h4 className="text-upper">Додај Посета</h4>
                <div className="form-group row">
                    <label htmlFor="visitId" className="col-sm-4 offset-sm-1 text-left">Шифра</label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" id="visitId"
                            name={"visitId"}
                            title="Шифра" required />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="date" className="col-sm-4 offset-sm-1 text-left">Датум</label>
                    <div className="col-sm-6">
                        <input type="date" className="form-control" id="date"
                            name={"date"}
                            title="Датум" required />
                    </div>
                </div>
                <div className="row form-group">
                    <div className="col-sm-4 offset-sm-1 text-left"> Време:</div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-5">
                                <input name={"from"} type="text"
                                    className="form-control"
                                    pattern="\d\d:?\d\d"
                                    title="Време од" required />
                            </div>
                            <div className="col-md-2 text-center">
                                -
                                        </div>
                            <div className="col-md-5 text-right">
                                <input name={"to"} type="text"
                                    pattern="\d\d:?\d\d"
                                    className="form-control"
                                    title="Време до" required />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="cardId" className="col-sm-4 offset-sm-1 text-left">Картичка</label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" id="cardId"
                            name={"cardId"}
                            title="Картичка" required />
                    </div>
                </div>
                <div className="row form-group">
                    <div className="col-sm-4 offset-sm-1 text-left"> Шкафче</div>
                    <div className="col-md-6">
                        <select name={"lockerId"} className="form-control">
                            <option value='1'>Женска Соблекувална 1</option>
                            <option value = '2'>Женска Соблекувална 2</option>
                            <option value = '3'>Женска Соблекувална 3</option>
                            <option value = '4'>Машка Соблекувална 1</option>
                            <option value = '5'>Машка Соблекувална 2</option>
                            <option value = '6'>Машка Соблекувална 3</option>
                        </select>
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
                        <Link to={"/visits"}
                            className="btn btn-danger text-upper">
                            Откажи
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default VisitAdd;