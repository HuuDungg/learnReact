import axios from "axios";

// Set config defaults when creating the instance
const instance = axios.create({
    baseURL: import.meta.env.VITE_BACK_END_URL
  });
  
  // Alter defaults after instance has been created
//   instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;

instance.interceptors.response.use(function (response) {
    if(response.data && response.data.data){
        return response.data
    }
    return response;
  }, function (error) {
    if(error.response && error.response.data) return error.response.data
  });

export default instance