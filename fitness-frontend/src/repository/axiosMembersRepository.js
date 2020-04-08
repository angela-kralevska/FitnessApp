import axios from '../custom-axios/axios.js'
import qs from 'qs'

const MembersService = {
    fetchMembers: () => {
        return axios.get("/api/members");
    },
    fetchMembersPaged: (page, pageSize) => {
        return axios.get("/api/members", {
            params: {
                'page': page, 'page-size': pageSize
            }
        })
    },
    createMember: (member) => {
        const data = {
            ...member
        }
        const formParams = qs.stringify(data);
        return axios.post("/api/members",formParams
        )
    },
    updateMember: (member) => {
        const data = {
            ...member
        }
        const memberId = member.memberId;
        const formParams = qs.stringify(data);
        return axios.patch(`/api/members/${memberId}`, formParams
        )
    },

    deleteMember: (memberId) => {
        return axios.delete(`/api/members/${memberId}`);
    },
    
    searchMember: (searchTerm) => {
        return axios.get(`/api/members?term=${searchTerm}`);
    },

    fetchById : (memberId) => {
        return axios.get(`/api/members/${memberId}`);
    },

}

export default MembersService;
