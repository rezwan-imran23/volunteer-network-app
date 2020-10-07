import React from 'react';
import { Button, Col, Container, FormControl, InputGroup, Row } from 'react-bootstrap';
import Works from '../Works/Works';
import tasks from '../../AllData/AllData';
import './Home.css';

const Home = () => {
    const handleSearchButton = ()=> {
        console.log("clicked")
     }
    return (

      <Container>
            <div className="headLine">
    <h1>I grow by helping people in need</h1>
  <br/>
  <InputGroup className="srcBox" size="lg">
    <FormControl placeholder="Search...."/>
    <InputGroup.Append>
    <Button onClick={handleSearchButton}>Search</Button>
    </InputGroup.Append>
  </InputGroup>
    
</div>

        
                
                <Row> 
                        
                        {
                          tasks.map(task => <Works task={task}></Works>)
                        }
                        
                </Row>       
               
            
           
       </Container>

      );
};

export default Home;    
        
  