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
    const { title, description, score } = this.props;
    return (
      <Card className="card-warning border-warning">
        <CardHeader className="bg-warning text-white">Not submitted yet! <span className="score-warning">{score}%</span></CardHeader>
        <CardBody className="card-warning-body">
          <CardTitle className="card-warning-title">{title}</CardTitle>
          <CardText>{description}</CardText>
        </CardBody>
      </Card>
    );
  }
}

const mapStateToProps = (state) => ({
  title: state.card.title,
  description: state.card.description,
  score: state.score.data
});

export default connect(mapStateToProps)(CardWarning);