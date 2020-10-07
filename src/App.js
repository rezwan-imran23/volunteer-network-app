import React, { createContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Registration from './Components/Registration/Registration';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Blog from './Components/Blog/Blog';
import NotFound from './Components/NotFound/NotFound';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import WorksDetail from './Components/WorksDetail/WorksDetail';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
      <Header></Header>
      <Switch>
      <Route path="/login">
        <Login/>
      </Route>

      <Route path="/home">
        <Home/>
      </Route>

      <PrivateRoute path = "/registration" >
      <Registration/>
      </PrivateRoute>

      <Route path = "/blog" >
      <Blog></Blog>
      </Route>
      <PrivateRoute path = "/work/:title" >
      <Registration/>
      </PrivateRoute>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route path="*">
            <NotFound></NotFound>
      </Route>

      </Switch>
      
      </Router>
      </UserContext.Provider>
    
  );
}

export default App;
