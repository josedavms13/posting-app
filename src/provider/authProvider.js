import POSTRequestToken from "../../services/POSTRequestToken";

async function authProvider(token) {
    POSTRequestToken(token)
        .then(data => {
            console.log(data.data)
        })

    //return {
    //  isAuth : bool,
    //  userData: {
    //             name : 'name',
    //             token: token
    //      }
    // }
}
export default authProvider