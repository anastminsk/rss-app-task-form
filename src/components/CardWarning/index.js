import React, { Component } from 'react';
import { 
  Card, 
  CardHeader, 
  CardBody, 
  CardTitle, 
  CardText
} from 'reactstrap';
import './index.css';

class CardWarning extends Component {
  render() {
    return (
      <Card className="card-warning border-warning">
        <CardHeader className="bg-warning text-white">Not submitted yet! <span className="score-warning">50%</span></CardHeader>
        <CardBody className="card-warning-body">
          <CardTitle className="card-warning-title">Correct expression</CardTitle>
          <CardText>Some quick example text to build on the card title.</CardText>
        </CardBody>
      </Card>
    );
  }
}

export default CardWarning;