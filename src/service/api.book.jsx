import axios from './axios.custom'

const getAllBook = (current, pageSize)=>{
    const URL_BACKEND = `/api/v1/book?current=${current}&pageSize=${pageSize}`
    return axios.get(URL_BACKEND);
}

const deleteById = (id)=>{
    const URL_BACKEND = `/api/v1/book/${id}`
    return axios.delete(URL_BACKEND)

}

const createBook = (title, author, price, quantity, genre)=>{
    const data  = 
    {
        thumbnail: "NONE",
        mainText: title,
        author: author,
        price: +price,
        quantity: +quantity,
        category: genre
    };
    const URL_BACKEND = '/api/v1/book'
    axios.post(URL_BACKEND, data)
}
export {getAllBook, deleteById, createBook}