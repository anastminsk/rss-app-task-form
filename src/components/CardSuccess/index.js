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
    const { title, description, score } = this.props;
    return (
      <Card className="card-success border-success">
        <CardHeader className="bg-success text-white">Done! <span className="score-success">{score}%</span></CardHeader>
        <CardBody className="card-success-body">
          <CardTitle className="card-success-title">{title}</CardTitle>
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

export default connect(mapStateToProps)(CardSuccess);