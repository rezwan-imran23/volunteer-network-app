import React, { useContext } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import './Registration.css';

const Registration = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const {title}=useParams()

    const handleRegister = ()=>{
     const newRegister = {...loggedInUser}
     fetch('http://localhost:5000/addRegister',{
         method: 'POST',
         headers: {'Content-Type':'application/json'},
         body: JSON.stringify(newRegister)
     })
     .then(res => res.json())
     .then (data => {
         console.log(data)
     })

    }
    return (
        <Container>
            <Row>
          
            <div className="col-4"></div>
            <div className="col-4 mb-5">
            <form>
            <div className="card p-4 mb-4">
            <h5>Register as a Volunteer</h5>
           <div className="form-group">
           <input type="text" className="form-control" placeholder="Full Name" />
           </div>

            <div className="form-group">
            <input type="email" className="form-control" placeholder="User or Email" />
            </div>

            <div className="form-group">
            <input type="date" className="form-control" placeholder="" />
            </div>

            <div className="form-group">
            <input type="text" className="form-control" placeholder="Description" />
            </div>


            <div className="form-group">
            <input type="text" className="form-control" placeholder={title} />
            </div>

            <button onClick={handleRegister} type="submit" className="btn btn-primary btn-block">Registration</button>
            
            </div>
                            
            </form>
            </div>
            
            <div className="col-4"></div>
            
            </Row>     
        </Container>
    );
};

export default Registration;