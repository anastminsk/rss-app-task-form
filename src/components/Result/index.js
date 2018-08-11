import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardSuccess from '../CardSuccess';
import CardWarning from '../CardWarning';
import CardDanger from '../CardDanger';
import { DEADLINE } from '../../constants';

class Result extends Component {
  render() {
    if (this.props.time > DEADLINE.getTime()) {
      return <CardDanger />;
    } else {
      if (this.props.score >= 100) {
        return <CardSuccess />;
      } else {
        return <CardWarning />;
      }
    }    
  }
}

const mapStateToProps = (state) => ({
  score: state.score.data,
  time: state.card.time
});

export default connect(mapStateToProps)(Result);