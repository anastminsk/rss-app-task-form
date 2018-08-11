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

class CardWarning extends Component {
  render() {
    return (
      <Card className="card-warning border-warning">
        <CardHeader className="bg-warning text-white">Not submitted yet! <span className="score-warning">{this.props.score}%</span></CardHeader>
        <CardBody className="card-warning-body">
          <CardTitle className="card-warning-title">Correct expression</CardTitle>
          <CardText>Some quick example text to build on the card title.</CardText>
        </CardBody>
      </Card>
    );
  }
}

const mapStateToProps = (state) => ({
  score: state.score.data
});

export default connect(mapStateToProps)(CardWarning);