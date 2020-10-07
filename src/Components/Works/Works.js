import React from 'react';
import { Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Works.css';

const Works = (props) => {
    const {title,image}=props.task

    const handleService = ()=>{
    }
    
    return (
        
        <Col sm={3}>

            <div onClick={()=>handleService(title)} className="services">
            <div className="serviceImg">
            <Link to={'/work/'+title}><img src={image} width="250px" alt=""/></Link>
            </div>
            <div className="serviceName">
            <h5><Link to={'/work/'+title}>{title}</Link></h5>
            </div>
            </div>
            
        </Col>
            
        
    );
};

export default Works;