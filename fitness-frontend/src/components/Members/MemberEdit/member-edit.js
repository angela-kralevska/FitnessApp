import React, {useState, useEffect} from 'react'
import {useParams, Link, useHistory} from 'react-router-dom';
import MembersService from '../../../repository/axiosMembersRepository';

const MemberEdit = (props) => {

    const [member, setMember] = useState({});
    const {memberId} = useParams();
    const history = useHistory();

    useEffect(() => {
        MembersService.fetchById(memberId).then((response)=>{
            console.log(response);
            const member = response.data;
            const newMember = {
                ...member
            }
            setMember(newMember);

        })
    },[])


    const onFormSubmit = (e) => {
        e.preventDefault();
        console.log(e);

        props.onSubmit(
            {
                "memberId": memberId,
                "firstName": e.target.firstName.value,
                "lastName": e.target.lastName.value,
                "address": e.target.address.value,
                "phone": e.target.phone.value,
                "lastPaymentId": e.target.lastPaymentId.value
            }
        );
        history.push("/members");
    }

    
    return (
        <div className="row">
            <form className="card " onSubmit={onFormSubmit} >
                <h4 className="text-upper">Промени податоци за член</h4>
                
                <div className="form-group row">
                    <label htmlFor="firstName" className="col-sm-4 offset-sm-1 text-left">Име</label>
                    <div className="col-sm-6">
                        <input type="text"  className="form-control" id="firstName"
                               name={"firstName"}
                               defaultValue={member.firstName}
                               title="First name title"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="lastName" className="col-sm-4 offset-sm-1 text-left">Презиме</label>
                    <div className="col-sm-6">
                        <input type="text"  className="form-control" id="lastName"
                               name={"lastName"}
                               defaultValue={member.lastName}
                               title="Last name title"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="address" className="col-sm-4 offset-sm-1 text-left">Адреса</label>
                    <div className="col-sm-6">
                        <input type="text"  className="form-control" id="address"
                               name={"address"}
                               defaultValue={member.address}
                               title="Address title"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="phone" className="col-sm-4 offset-sm-1 text-left">Телефон</label>
                    <div className="col-sm-6">
                        <input type="text"  className="form-control" id="phone"
                               name={"phone"}
                               defaultValue={member.phone}
                               title="Phone title"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="lastPaymentId" className="col-sm-4 offset-sm-1 text-left">Последна уплата</label>
                    <div className="col-sm-6">
                        <input type="text"  className="form-control" id="lastPaymentId"
                               name={"lastPaymentId"}
                               defaultValue={member.lastPaymentId}
                               title="Last payment id title"/>
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
                        <Link to={"/members"}
                            className="btn btn-danger text-upper">
                            Откажи 
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default MemberEdit;