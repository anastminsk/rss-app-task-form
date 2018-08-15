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
      <Card className={`card border-${this.props.type}`}>
        <CardHeader className={`bg-${this.props.type} text-white`}>
        	{
        		(this.props.type === 'success') ? 
        			(<div>Done! <span className="score">{score}%</span></div>) :
        		(this.props.type === 'warning') ? 
        			(<div>Not submitted yet! <span className="score">{score}%</span></div>) :
        		(<div>The deadline has passed</div>)
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

export default connect(mapStateToProps)(CardSuccess);