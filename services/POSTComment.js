import axios from "axios";

import DELETEToken from "./DELETEToken";


function POSTComment(data){

    const DELETE_TOKEN = true;

    console.log('DELETE TOKEN = ', DELETE_TOKEN);

    const url = 'https://murmuring-scrubland-15375.herokuapp.com/api/post-opinion';

    const commentData = data.comment;
    console.log(commentData)


    axios.post(url, commentData)
        .then(res => {
            if (res.status === 200) {
                if (DELETE_TOKEN) {

                    DELETEToken(data.token)
                        .then(res=> {
                            console.log(res.status);
                            return (res.status);
                        });
                }else{
                    return ('not deleted')
                }
            }

        })



}

export default POSTComment