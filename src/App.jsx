import React, {useEffect, useState} from 'react'

import Welcome from "./views/Welcome";
import 'bootstrap/dist/css/bootstrap.min.css'
// import './views/viewsStyles/appStyles.css'

import PostPage from "./views/PostPage";
import Loading from "./views/Loading";
import unIdleHeroku from "../services/unIdleHeroku";
import POSTRequestToken from "../services/POSTRequestToken";


function App() {

    //region Un idle server
    useEffect(()=>{
        unIdleHeroku()
            .then(res => {
                if (res.status === 200) {
                    setIsIdleFinished(true);
                }
            });
    },[])

    const [isIdleFinished, setIsIdleFinished] = useState(false);
    //endregion Un idle server

    const [userData, setUserData] = useState(null);
    function authUser(token){
        POSTRequestToken(token)
            .then(data => setUserData(data.data));
    }



    const [isUserAuth, setIsUserAuth] = useState(false);

    useEffect(()=>{
        if(userData){
            console.log(userData);
            if(userData.isAuth){
                setIsUserAuth(true)
            }
        }
    },[userData])

    //Get Auth


    return (
      <div className={'app'}>
          {!isIdleFinished && <Loading />}
          {isIdleFinished && <div className="app-container">

              <Welcome continueHandling={(token) => {
                  authUser(token)
              }}/>
              {isUserAuth && <PostPage userData={userData}/>}
          </div>}
      </div>

  )
}

export default App
