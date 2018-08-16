import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { 
  Card, 
  CardHeader, 
  CardBody, 
  CardTitle, 
  CardText
} from 'reactstrap';
import './index.css';

class CardTemplate extends Component {
  render() {
    const { title, description, score, type } = this.props;
    return (
      <Card className={`card border-${type}`}>
        <CardHeader className={`bg-${type} text-white`}>
          {
            (type === 'success') ? 
              <Fragment>
                Done! <span className="score">{score}%</span>
              </Fragment> :
            (type === 'warning') ? 
              <Fragment>
                Not submitted yet! <span className="score">{score}%</span>
              </Fragment> :
            <Fragment>
              The deadline has passed
            </Fragment>
          }
        </CardHeader>
        <CardBody className="card-body">
          <CardTitle className="card-title">{title}</CardTitle>
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

export default connect(mapStateToProps)(CardTemplate);