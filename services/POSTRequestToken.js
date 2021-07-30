import axios from "axios";

function POSTRequestToken(token){

    const baseUrl= `http://localhost:8080/api/get-token`


    const config = {
        headers: {
            'Content-Type': 'text/plain'
        },
        responseType: 'json'
    };

    return axios.post(baseUrl, token, config)


}
export default POSTRequestToken