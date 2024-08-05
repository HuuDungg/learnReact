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

const updateUserApi = (fullName, _id, phone) =>{
    const URL_BACKEND = '/api/v1/user'
    const data = {
        _id: _id,
        fullName: fullName,
        phone: phone
    }
    return axios.put(URL_BACKEND, data)
}

const deleteUserApi = (_id) =>{
    const URL_BACKEND = '/api/v1/user/' + _id
    return axios.delete(URL_BACKEND)
}

const fetchAllUser = () =>{
    const URL_BACKEND = '/api/v1/user'
    return axios.get(URL_BACKEND)
}

export{createUserApi, fetchAllUser, updateUserApi, deleteUserApi}