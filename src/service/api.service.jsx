import axios from './axios.custom'

const createUserApi = (fullName, email, password, phone) =>{
    const URL_BACKEND = '/api/v1/user'
    const data = {
        fullName,
        email, 
        password, 
        phone
    }
    return axios.post(URL_BACKEND, data)
}

export{createUserApi}