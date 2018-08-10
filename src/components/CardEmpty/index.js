import React, { Component } from 'react';
import { 
  Card, 
  CardHeader, 
  CardBody, 
  CardFooter, 
  CardTitle, 
  CardText, 
  Form, 
  FormGroup, 
  Label, 
  Input, 
  Button 
} from 'reactstrap';
import './index.css';

class CardEmpty extends Component {
  render() {
    return (
      <Card className="card-empty">
        <CardHeader>Not submitted yet!</CardHeader>
        <CardBody>
          <CardTitle className="card-empty-title">Correct expression</CardTitle>
          <CardText>Some quick example text to build on the card title.</CardText>
        </CardBody>
        <CardFooter>
          <small className="text-muted">
            <Form>
              <FormGroup>
                <Label for="exampleEmail">Choose repo</Label>
                <Input type="email" name="email" id="exampleEmail" placeholder="Enter link" bsSize="sm"/>
              </FormGroup>
              <FormGroup>
                <Label for="exampleText">Comments</Label>
                <Input type="textarea" name="text" id="exampleText" rows="5" placeholder="Write comments here" bsSize="sm"/>
              </FormGroup>
              <Button className="submit-btn">Submit</Button>
            </Form>
          </small>
        </CardFooter>
      </Card>
    );
  }
}

export default CardEmpty;