import axios from '../custom-axios/axios.js'

const CardInfosService = {
    fetchCardInfos: () => {
        return axios.get("/api/cardInfo");
    },
    fetchCardInfosPaged: (page, pageSize) => {
        return axios.get("/api/cardInfo", {
            headers: {
                'page': page, 'page-size': pageSize
            }
        })
    },
    
}

export default CardInfosService;
