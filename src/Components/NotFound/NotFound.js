import React from 'react';
import { Container } from 'react-bootstrap';
import './NotFound.css'

const NotFound = () => {
    return (
        <Container>
            <div className="notFound">
            <h1>404</h1>
            <h5>Not Found</h5>
        </div>
        </Container>
        
    );
};

export default NotFound;