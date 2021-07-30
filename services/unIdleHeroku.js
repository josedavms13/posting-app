import axios from "axios";

function unIdleHeroku(){

    return(
        axios.get('https://murmuring-scrubland-15375.herokuapp.com/')
    )
}

export default unIdleHeroku