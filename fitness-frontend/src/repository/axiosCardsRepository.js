import axios from '../custom-axios/axios.js'
import qs from 'qs'

const CardsService = {
    fetchCards: () => {
        return axios.get("/api/cards");
    },
    fetchCardsPaged: (page, pageSize) => {
        return axios.get("/api/cards", {
            params: {
                'page': page, 'page-size': pageSize
            }
        })
    },
    createCard: (card) => {
        const data = {
            ...card
        }
        const formParams = qs.stringify(data);
        return axios.post("/api/cards",formParams
        )
    },
    
    deleteCard: (cardId) => {
        return axios.delete(`/api/cards/${cardId}`);
    },
    

}

export default CardsService;
