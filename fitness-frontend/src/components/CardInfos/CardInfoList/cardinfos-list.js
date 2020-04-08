import React from 'react';
import CardInfo from "../CardInfo/cardinfo";
import ReactPaginate from 'react-paginate';

const getCardInfos = (props) => {
    const cardInfos = props.cardInfos.map((cardInfo, index) => {
        return (
            <CardInfo id={cardInfo.id} cardInfo={cardInfo} key={index} colClass={"col-md-6 mt-2 col-sm-12"}/>
        );
    });
    const handlePageClick = (e) => {
        props.onPageClick(e.selected)
    }
    const paginate = () => {
        if (props.totalPages !== 0) {
            return (
                <ReactPaginate previousLabel={"previous"}
                               nextLabel={"next"}
                               breakLabel={<span className="gap">...</span>}
                               breakClassName={"break-me"}
                               pageCount={props.totalPages}
                               marginPagesDisplayed={2}
                               pageRangeDisplayed={5}
                               pageClassName={"page-item"}
                               pageLinkClassName={"page-link"}
                               previousClassName={"page-item"}
                               nextClassName={"page-item"}
                               previousLinkClassName={"page-link"}
                               nextLinkClassName={"page-link"}
                               forcePage={props.page}
                               onPageChange={handlePageClick}
                               containerClassName={"pagination justify-content-center"}
                               activeClassName={"active"}/>
            )
        }
    }

    return (
        <div>
            <div className={"row"}>
                {cardInfos}
            </div>
            {paginate()}
        </div>

    )
}

export default getCardInfos;
