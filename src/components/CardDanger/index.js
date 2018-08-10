import React, { Component } from 'react';
import { 
  Card, 
  CardHeader, 
  CardBody, 
  CardTitle, 
  CardText
} from 'reactstrap';
import './index.css';

class CardDanger extends Component {
  render() {
    return (
      <Card className="card-danger border-danger">
        <CardHeader className="bg-danger text-white">The deadline has passed</CardHeader>
        <CardBody className="card-danger-body">
          <CardTitle className="card-danger-title">Correct expression</CardTitle>
          <CardText>Some quick example text to build on the card title.</CardText>
        </CardBody>
      </Card>
    );
  }
}

export default CardDanger;