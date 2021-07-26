import React, { useState } from 'react'
import {HashRouter as Router, Route , Switch} from "react-router-dom";

import Welcome from "./views/Welcome";
import 'bootstrap/dist/css/bootstrap.min.css'


import PostPage from "./views/PostPage";
import {Spinner} from "react-bootstrap";
import SpinnerLoader from "./views/components/SpinnerLoader";

function App() {

  return (
      <Router>
          <Switch>
              <Route path={'/'}>
                  <Welcome />
                  
              </Route>
          </Switch>
      </Router>
  )
}

export default App
