import React, { useContext } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import google from '../../logos/google.png';
import './Login.css'
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import {UserContext} from '../../App';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider).then(function(result) {
            
            const {displayName, email} = result.user;
            const newUser = {name: displayName, email}
            setLoggedInUser(newUser)
            history.replace(from);
            // ...
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
    }
    return (
        <Container>
        <Row>
      
        <div className="col-4"></div>
        <div className="col-4 mb-5">
        <form>
        <div className="card ">
        <h5>Login With</h5>
       
        <div className="socialIcon">
        <img src={google} alt="" />
        <h5 onClick={handleGoogleSignIn}>Continue With Google</h5>
        </div>

        <h6 className="createAcc">Don't you have account? <span><Link to="/create">Create an account</Link></span></h6>   
        </div>
                        
        </form>
        
        
        </div>
        
        <div className="col-4"></div>
        
        </Row>     
    </Container>
    );
};

export default Login;