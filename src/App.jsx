import React, {useEffect, useState} from 'react'

import Welcome from "./views/Welcome";
import 'bootstrap/dist/css/bootstrap.min.css'


import PostPage from "./views/PostPage";
import Loading from "./views/Loading";
import unIdleHeroku from "../services/unIdleHeroku";


function App() {

    useEffect(()=>{
        unIdleHeroku()
            .then(res => {
                if (res.status === 200) {
                    setIsIdleFinished(true);
                }
            });
    },[])

    const [isIdleFinished, setIsIdleFinished] = useState(false);

    const [isUserAuth, setIsUserAuth] = useState(false);



    const [userData, setUserData] = useState(null);

    //Get Auth


    return (
      <div className={'app'}>
          {!isIdleFinished && <Loading />}
          {isIdleFinished && <div className="app-container">

              <Welcome continueHandling={(token) => {
                  continueButton(token)
              }}/>
              {isUserAuth && <PostPage userData={userData}/>}
          </div>}
      </div>

  )
}

export default App
