import React from 'react'
import { useHistory, Link } from 'react-router-dom';

const CardAdd = (props) => {

    const history = useHistory();

    const onFormSubmit = (e) => {
        e.preventDefault();
        const newCard = {
            "cardId": e.target.cardId.value,
            "startDate": e.target.startDate.value,
            "endDate": e.target.endDate.value,
            "cardInfoId": e.target.cardInfoId.value
        };
        props.onNewCardAdded(newCard);
        history.push("/cards");
    }

    return (
        <div className="row">
            <form className="card " onSubmit={onFormSubmit}>
                <h4 className="text-upper">Додај Картичка</h4>
                
                <div className="form-group row">
                    <label htmlFor="cardId" className="col-sm-4 offset-sm-1 text-left">Шифра</label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" id="cardId"
                            name={"cardId"}
                            title="Шифра" required/>
                    </div>
                </div>
                
                <div className="form-group row">
                    <label htmlFor="startDate" className="col-sm-4 offset-sm-1 text-left">Датум за почеток</label>
                    <div className="col-sm-6">
                        <input type="date" className="form-control" id="startDate"
                            name={"startDate"}
                            title="Датум за почеток" required/>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="endDate" className="col-sm-4 offset-sm-1 text-left">Датум за крај</label>
                    <div className="col-sm-6">
                        <input type="date" className="form-control" id="endDate"
                            name={"endDate"}
                            title="Датум за крај" required/>
                    </div>
                </div>

                <div className="row form-group">
                    <div className="col-sm-4 offset-sm-1 text-left"> Тип картичка</div>
                    <div className="col-md-6">
                        <select name={"cardInfoId"} className="form-control">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
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
                        <Link to={"/cards"}
                            className="btn btn-danger text-upper">
                            Откажи
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CardAdd;