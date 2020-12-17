import axios from 'axios';
// const API_URL = " https://eventos-app-web.herokuapp.com/v1.0"
const API_URL = "http://localhost:4001/v1.0" 
class Api{
     get(url, params){
        url = new URL(`${API_URL}/${url}`);    
        if(params){
            Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
        }
        return axios.get(url)
        .then(async (response) => { 
            return await response;
        }).catch( error => error);
    }

    post(url, data){
        url = new URL(`${API_URL}/${url}`);
        return axios.post(url, data)
        .then(async (response) => {
            return response;
        })
        .catch( error => error);
    }

}
export default new Api();