import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      units: '',
      errorField: false,
      errorServer: false,
      success: false
    };
  }

  componentDidMount() {
    axios.get('http://localhost:4200/api/v1/properties')
    .then(({ data }) => this.setState({ properties: data.properties }))
    .catch(err => this.setState({
      errorServer: true,
      errorField: false,
      success: false
    }));
  }

  unitsList(units) {
    return (
      <ul className="subList">
        {units && units.map((item, i) => {
          return ( <li key={i}>{item}</li> )
        })}
      </ul>
    )
  }

  mainList(properties) {
    return (
      <ul className="list">
        {properties && properties.map(property => {
          return (
            <li className="mainList" key={property._id}>
              <p>{property.name}</p>
              {this.unitsList(property.units)}
              <button className="delete-button" onClick={() => this.handleDelete(property._id)}>DELETE</button>
            </li>
          )
        })}
      </ul>
    )
  }

  handleChange(name) {
    return (event) => {
      this.setState({
        [name]: event.target.value,
      });
    };
  }

  formUnits() {
    const { errorField, errorServer, success } = this.state;

    return (
      <div>
        <div className="erros-feedbacks">
          {errorField && <div className="alert alert-warning">Please, fill all fields correctly!</div>}
          {errorServer && <div className="alert alert-danger">Oops! There was an error, try again!</div>}
          {success && <div className="alert alert-success">Accomodations Added</div>}
        </div>
        <div className="form">
          <label>Name:</label>
          <input type="text" className="itemField name" onChange={this.handleChange('name')} />
          <label>Units:</label>
          <input type="text" className="itemField units" onChange={this.handleChange('units')} />
          <legend>Use "," to add each units. Ex:(kitchen, bathroom, living-room)</legend>
          <button className="add" onClick={() => this.handleAdd()}>add accomodations</button>
        </div>
      </div>
    );
  }

  handleAdd() {
    const { name, units } = this.state;
    if (!name || !units) {
      this.setState({
        errorServer: false,
        errorField: true,
        success: false
      })
      return;
    }

    const body = {
      name,
      units: units.split(',').map(item => item.replace(" ", "")).filter(item => item !== ""),
    }

    axios.post('http://localhost:4200/api/v1/properties', body)
    .then(({ data }) => {
      if (data._id) {
        this.setState({
          errorServer: false,
          errorField: false,
          success: true
        })
      }
    })
    .catch(err => this.setState({
      errorServer: true,
      errorField: false,
      success: false
     }));
  }

  handleDelete(id) {
    axios.delete(`http://localhost:4200/api/v1/properties/${id}`)
    .then(({ data }) => {
      if (data) {
        this.setState({
          errorServer: false,
          errorField: false,
          success: true
        })
      }
    })
    .catch(err => this.setState({
      errorServer: true,
      errorField: false,
      success: false
     }));
  }

  render() {
    const { properties } = this.state;

    return (
      <div className="accomodations">
        <h2>Create new item</h2>
        {this.formUnits()}

        <h2>Propeties List</h2>
        {this.mainList(properties)}
      </div>
    );
  }
}

export default App;