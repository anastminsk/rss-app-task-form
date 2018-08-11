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

class CardDanger extends Component {
  render() {
    const { title, description } = this.props;
    return (
      <Card className="card-danger border-danger">
        <CardHeader className="bg-danger text-white">The deadline has passed</CardHeader>
        <CardBody className="card-danger-body">
          <CardTitle className="card-danger-title">{title}</CardTitle>
          <CardText>{description}</CardText>
        </CardBody>
      </Card>
    );
  }
}

const mapStateToProps = (state) => ({
  title: state.card.title,
  description: state.card.description
});

export default connect(mapStateToProps)(CardDanger);