import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardTemplate from '../CardTemplate';
import { DEADLINE } from '../../constants';

class Result extends Component {
  render() {
    if (this.props.time > DEADLINE.getTime()) {
      return <CardTemplate type="danger" />;
    } else {
      if (this.props.score >= 100) {
        return <CardTemplate type="success" />;
      } else {
        return <CardTemplate type="warning" />;
      }
    }    
  }
}

const mapStateToProps = (state) => ({
  score: state.score.data,
  time: state.card.time
});

export default connect(mapStateToProps)(Result);