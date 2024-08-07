import axios from './axios.custom'

const getAllBook = ()=>{
    const URL_BACKEND = '/api/v1/book?current=1&pageSize=100'
    return axios.get(URL_BACKEND);
}

export {getAllBook}