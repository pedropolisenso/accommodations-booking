import React, { Component } from 'react';
import MainList from '../MainList';
import { getProperties, createProperties } from '../../actions/properties';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      units: '',
      errorField: false,
    };
  }

  componentDidMount() {
    if (this.props && this.props.dispatch) {
      this.props.dispatch(getProperties());
    }
  }

  handleChange(name) {
    return (event) => {
      this.setState({
        [name]: event.target.value,
      });
    };
  }

  handleAdd() {
    const { name, units } = this.state;
    if (!name || !units) {
      this.setState({ errorField: true })
      return;
    }

    this.setState({ errorField: false })

    const body = {
      name,
      units: units.split(',').map(item => item.replace(" ", "")).filter(item => item !== ""),
    }

    this.props.dispatch(createProperties(body));
  }

  
  feedbackMessages({errorServer, successDeleted, successCreated}) {
    const { errorField } = this.state;

    return (
      <div className="erros-feedbacks">
        {errorServer  &&
          <div className="alert alert-danger">Oops! There was an error, try again!</div>}
        {errorField &&
          <div className="alert alert-warning">Please, fill all fields correctly!</div>}
        {successCreated && !successDeleted &&
          <div className="alert alert-success">Accomodations Added</div>}
        {successDeleted && !successCreated &&
          <div className="alert alert-success">Accomodations Deleted</div>}
      </div>
    )
  }
  
  render() {
    const { Properties, dispatch, Feedbacks } = this.props;

    return (
      <div className="accomodations">
        <h2>Create new item</h2>
        {this.feedbackMessages(Feedbacks)}
        <div className="form">
          <label>Name:</label>
          <input type="text" className="itemField name" onChange={this.handleChange('name')} />
          <label>Units:</label>
          <input type="text" className="itemField units" onChange={this.handleChange('units')} />
          <legend>Use "," to add each units. Ex:(kitchen, bathroom, living-room)</legend>
          <button className="add" onClick={() => this.handleAdd()}>add properties</button>
        </div>

        <h2>Properties List</h2>
        <MainList properties={Properties} dispatch={dispatch} />
      </div>
    );
  }
}

export default App;