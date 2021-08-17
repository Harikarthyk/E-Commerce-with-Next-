import axios from 'axios';
const API = 'https://e-commerce-clothings.herokuapp.com/api/'
export const requestHandler = async(method, postURL, data , header) => {
    const url = API+postURL;
    try{
        let response = await axios({
            method,
            url,
            data,
            headers: header
        });
        if (response.status >= 200 && response.status <= 299) {
            return response;
        }
        return {
            data : {
                error : true,
                message : "Something went wrong"
            }
        };
    }catch({response}){
        return response;
    }
    
}