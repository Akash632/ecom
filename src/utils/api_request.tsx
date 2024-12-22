import axios, { AxiosRequestConfig } from 'axios';

const baseURL  = "http://localhost:5000/api/v1";

const ApiRequest = async (data : AxiosRequestConfig) => {
        try{
            const url = `${baseURL}${data.url}`;
            const options = {...data, url};
            const response = await axios.request(options);
            return response.data;
        }
        catch(err){
            throw err;
        }
}

export default ApiRequest