import React, { Component } from 'react';
import MainList from '../MainList';
import { getPropeties, createPropeties } from '../../actions/propeties';

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
      this.props.dispatch(getPropeties());
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

    const body = {
      name,
      units: units.split(',').map(item => item.replace(" ", "")).filter(item => item !== ""),
    }

    this.props.dispatch(createPropeties(body));
  }

  
  feedbackMessages(errorField, errorServer) {
    return (
      <div className="erros-feedbacks">
        {errorField && <div className="alert alert-warning">Please, fill all fields correctly!</div>}
        {errorServer && <div className="alert alert-danger">Oops! There was an error, try again!</div>}
        {false && <div className="alert alert-success">Accomodations Added</div>}
      </div>
    )
  }
  
  render() {
    const { Propeties, errorServer, dispatch } = this.props;
    const { errorField } = this.state;

    return (
      <div className="accomodations">
        <h2>Create new item</h2>
        {this.feedbackMessages(errorField, errorServer)}
        <div className="form">
          <label>Name:</label>
          <input type="text" className="itemField name" onChange={this.handleChange('name')} />
          <label>Units:</label>
          <input type="text" className="itemField units" onChange={this.handleChange('units')} />
          <legend>Use "," to add each units. Ex:(kitchen, bathroom, living-room)</legend>
          <button className="add" onClick={() => this.handleAdd()}>add properties</button>
        </div>

        <h2>Propeties List</h2>
        <MainList properties={Propeties.properties} dispatch={dispatch} />
      </div>
    );
  }
}

export default App;