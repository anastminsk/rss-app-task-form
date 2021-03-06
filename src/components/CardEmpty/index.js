import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fillCard, setScore } from '../../ac';
import { 
  Card, 
  CardHeader, 
  CardBody, 
  CardFooter, 
  CardTitle, 
  CardText, 
  Form, 
  FormGroup, 
  Label, 
  Input, 
  Button 
} from 'reactstrap';
import './index.css';

class CardEmpty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repo: this.props.repo,
      comments: this.props.comments
    };
    this.handleChangeRepo = this.handleChangeRepo.bind(this);
    this.handleChangeComments = this.handleChangeComments.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeRepo(e) {
    this.setState({
      repo: e.target.value
    });
  }

  handleChangeComments(e) {
    this.setState({
      comments: e.target.value
    });
  }

  handleSubmit(e) {
    const { fillCard, setScore, history } = this.props;
    e.preventDefault();
    let a = Math.random() * 100;
    let d = new Date();
    fillCard(this.state.repo, this.state.comments, d.getTime());
    setScore(Math.round(a));
    history.push('/result');
  }

  render() {
    const { title, description } = this.props;
    return (
      <Card className="card-empty">
        <CardHeader>Not submitted yet!</CardHeader>
        <CardBody>
          <CardTitle className="card-empty-title">{title}</CardTitle>
          <CardText>{description}</CardText>
        </CardBody>
        <CardFooter>
          <small className="text-muted">
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label for="taskUrl">Choose repo</Label>
                <Input 
                  type="url" 
                  name="url" 
                  id="taskUrl" 
                  placeholder="Enter link" 
                  bsSize="sm"
                  required
                  value={this.state.repo} 
                  onChange={this.handleChangeRepo}
                />
              </FormGroup>
              <FormGroup>
                <Label for="taskText">Comments</Label>
                <Input 
                  type="textarea" 
                  name="text" 
                  id="taskText" 
                  rows="5" 
                  placeholder="Write comments here" 
                  bsSize="sm"
                  value={this.state.comments}
                  onChange={this.handleChangeComments}
                />
              </FormGroup>
              <Button className="submit-btn">Submit</Button>
            </Form>
          </small>
        </CardFooter>
      </Card>
    );
  }
}

const mapStateToProps = (state) => ({
  title: state.card.title,
  description: state.card.description,
  repo: state.card.repo,
  comments: state.card.comments
});

export default connect(mapStateToProps, { fillCard, setScore })(CardEmpty);