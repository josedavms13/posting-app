import axios from "axios";

function DELETEToken(token){
    console.log('will delete the token = ', token);

    const url = 'https://murmuring-scrubland-15375.herokuapp.com/api/delete-token';



    return axios.delete(url,{
        data : token
    })


}

export default DELETEToken