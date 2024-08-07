import axios from './axios.custom'

const getAllBook = (current, pageSize)=>{
    const URL_BACKEND = `/api/v1/book?current=${current}&pageSize=${pageSize}`
    return axios.get(URL_BACKEND);
}

export {getAllBook}