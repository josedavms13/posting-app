import axios from "axios";

function POSTRequestToken(token){

    const baseUrl= `https://murmuring-scrubland-15375.herokuapp.com/api/get-token`;



    const config = {
        headers: {
            'Content-Type': 'text/plain'
        },
        responseType: 'json'
    };

    return axios.post(baseUrl, token, config)


}
export default POSTRequestToken