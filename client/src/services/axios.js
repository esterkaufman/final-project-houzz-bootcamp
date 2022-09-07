import axios from 'axios';
const instance = axios.create({
    baseURL:  process.env.NODE_ENV !== "development" ? "/api/" : "//localhost:8080/api/"

});
export default instance;