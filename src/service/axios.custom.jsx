import axios from "axios";

// Set config defaults when creating the instance
const instance = axios.create({
    baseURL: 'http://localhost:8080'
  });
  
  // Alter defaults after instance has been created
//   instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;

instance.interceptors.request.use(function (response) {
    if(response.data && response.data.data){
        return response.data.data
    }
    return response;
  }, function (error) {
    return Promise.reject(error);
  });

export default instance