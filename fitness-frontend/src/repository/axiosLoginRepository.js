import axios from '../custom-axios/axios.js'
import qs from 'qs'

const LoginService = {
    login: (username, password) => {
        const data = {
            ...username, ...password
        }
        const formParams = qs.stringify(data);
        return axios.post("/api/login",formParams
        )
    }

}

export default LoginService;
