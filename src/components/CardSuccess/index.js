import React, { Component } from 'react';
import { 
  Card, 
  CardHeader, 
  CardBody, 
  CardTitle, 
  CardText
} from 'reactstrap';
import './index.css';

class CardSuccess extends Component {
  render() {
    return (
      <Card className="card-success border-success">
        <CardHeader className="bg-success text-white">Done! <span className="score-success">100%</span></CardHeader>
        <CardBody className="card-success-body">
          <CardTitle className="card-success-title">Correct expression</CardTitle>
          <CardText>Some quick example text to build on the card title.</CardText>
        </CardBody>
      </Card>
    );
  }
}

export default CardSuccess;