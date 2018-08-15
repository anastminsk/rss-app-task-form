import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../Card';
import { DEADLINE } from '../../constants';

class Result extends Component {
  render() {
    if (this.props.time > DEADLINE.getTime()) {
      return <Card type="danger" />;
    } else {
      if (this.props.score >= 100) {
        return <Card type="success" />;
      } else {
        return <Card type="warning" />;
      }
    }    
  }
}

const mapStateToProps = (state) => ({
  score: state.score.data,
  time: state.card.time
});

export default connect(mapStateToProps)(Result);