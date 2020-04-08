import axios from '../custom-axios/axios.js'
import qs from 'qs'

const VisitsService = {
    fetchVisits: () => {
        return axios.get("/api/visits");
    },
    fetchVisitsPaged: (page, pageSize) => {
        return axios.get("/api/visits", {
            params: {
                'page': page, 'page-size': pageSize
            }
        })
    },
    createVisit: (visit) => {
        const data = {
            ...visit
        }
        const formParams = qs.stringify(data);
        return axios.post("/api/visits",formParams
        )
    },
    
    deleteVisit: (visitId) => {
        return axios.delete(`/api/visits/${visitId}`);
    },
    

}

export default VisitsService;
