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

const updateAvatarUserApi = (avatar, _id, fullName, phone) =>{
    const URL_BACKEND = '/api/v1/user'
    const data = {
        _id,
        avatar, 
        fullName, 
        phone
    }
    return axios.put(URL_BACKEND, data)
}

const deleteUserApi = (_id) =>{
    const URL_BACKEND = '/api/v1/user/' + _id
    return axios.delete(URL_BACKEND)
}

const fetchAllUser = (current, pageSize) =>{
    const URL_BACKEND = `/api/v1/user?current=${current}&pageSize=${pageSize}`
    return axios.get(URL_BACKEND)
}

const registerUserApi = (fullName, email, password, phone)=>{
    const URL_BACKEND = '/api/v1/user/register'
    const data = {
        fullName,
        email,
        password,
        phone
    }
    return axios.post(URL_BACKEND, data)
}

const loginUserApi = (email, password)=>{
    const URL_BACKEND = '/api/v1/auth/login'
    const data = {
        username: email,
        password: password,
        delay: 1000
    }
    return axios.post(URL_BACKEND, data)
}

const handleUploadFile = (file, folder) =>{
    let config = {
        headers: {
          'upload-type': folder,
          'content-Type': 'multipart/form-data'
        }
      }

      const bodyFormData = new FormData()

      bodyFormData.append('fileImg', file)
      const URL_BACKEND = '/api/v1/file/upload'

    return axios.post(URL_BACKEND, bodyFormData, config)
}

const getAccountApi = ()=>{
    const URL_BACKEND = '/api/v1/auth/account'
    return axios.get(URL_BACKEND)
}


export{createUserApi, fetchAllUser, updateUserApi, deleteUserApi, handleUploadFile, updateAvatarUserApi, registerUserApi, loginUserApi, getAccountApi}