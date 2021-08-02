import React, {useEffect, useState} from 'react'

import Welcome from "./views/Welcome";
import 'bootstrap/dist/css/bootstrap.min.css'
// import './views/viewsStyles/appStyles.css'

import PostPage from "./views/PostPage";
import Loading from "./views/Loading";
import unIdleHeroku from "../services/unIdleHeroku";
import POSTRequestToken from "../services/POSTRequestToken";
import NonAuthToken from "./views/components/NonAuthToken";
import POSTComment from "../services/POSTComment";
import ThanksForCommenting from "./views/components/ThanksForCommenting";



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

    //region Authentication

    //search token in db
    const [userData, setUserData] = useState(null);
    function authUser(token){
        POSTRequestToken(token)
            .then(data => setUserData(data.data))
            .catch(tokenDoesntExist);
    }


    //auth user
    const [isUserAuth, setIsUserAuth] = useState(false);
    const [welcomePage, setWelcomePage] = useState(true);
    useEffect(()=>{
        if(userData){
            console.log(userData);
            const auth = userData.isAuth;
            console.log('auth ', auth)

            if(auth !== undefined || true){

                if(auth){
                    setIsUserAuth(true);
                    setWelcomePage(false);

                }else{
                    nonAuthToken();
                }
            }
        }
    },[userData])




    //Invalid Token handling
    const [nonAuthTokenCard, setNonAuthTokenCard] = useState(false);
    const [nonAuthMode, setNonAuthMode] = useState(1);

    function nonAuthToken(){
        setNonAuthMode(1);
        setNonAuthTokenCard(true);
        setTimeout(()=>{

            setNonAuthTokenCard(false);
        },2000)
    }
    function tokenDoesntExist(){
        setNonAuthMode(2);
        setNonAuthTokenCard(true);
        setTimeout(()=>{
            setNonAuthTokenCard(false);
        },2000)
    }


    //endregion Authentication


    //region Handle Form Submit


    const [functionCompleted, setFunctionCompleted] = useState(false);

    async function postComment(data){

       await POSTComment(data);
        setFunctionCompleted(true);

    }

    useEffect(()=>{
        console.log('functionCompleted ', functionCompleted);
        if(functionCompleted){
            commentPosted();
        }
    },[functionCompleted])

    const [successfulComment, setSuccessfulComment] = useState(false);
    function commentPosted() {
        setIsUserAuth(false);
        setSuccessfulComment(true);
        setTimeout(()=>{
            setSuccessfulComment(false);
            setFunctionCompleted(false);
            setWelcomePage(true);
            },2000)

    }

    //endregion Handle Form Submit


    return (
      <div className={'app'}>
          {successfulComment && <ThanksForCommenting/>}
          {nonAuthTokenCard &&<NonAuthToken mode={nonAuthMode}/>}
          {!isIdleFinished && <Loading />}
          {isIdleFinished && <div className="app-container">

              {welcomePage && <Welcome continueHandling={(token) => {
                  authUser(token)
              }}/>}
              {isUserAuth && <PostPage userData={userData} handleFormSubmit={(data)=>postComment(data)}/>}
          </div>}
      </div>

  )
}

export default App
