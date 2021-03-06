import React from 'react';

const FormSearch = (props) => {

    const onSearch = (e)=>{
        e.preventDefault();
        props.onSearch(e.target["searchMember"].value);
    }


    return (
        <form onSubmit={onSearch} className="form-inline mt-2 mt-md-0">
            <input className="form-control mr-sm-2" name={"searchMember"} type="text" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Пребарај</button>
        </form>
    )
}

export default FormSearch;
