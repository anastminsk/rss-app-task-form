import React, { Component } from 'react';
import { connect } from 'react-redux';
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
        <CardHeader className="bg-success text-white">Done! <span className="score-success">{this.props.score}%</span></CardHeader>
        <CardBody className="card-success-body">
          <CardTitle className="card-success-title">Correct expression</CardTitle>
          <CardText>Some quick example text to build on the card title.</CardText>
        </CardBody>
      </Card>
    );
  }
}

const mapStateToProps = (state) => ({
  score: state.score.data
});

export default connect(mapStateToProps)(CardSuccess);