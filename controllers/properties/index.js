const PropertiesModel = require('../../models/properties');

class PropertiesController {
  constructor(Model) {
    this.Model = Model;
  }

  create({ body }, res) {
    this.Model.create(body, (err, result) => {
      res.json(result);
    });
  }
  
  findAll(req, res) {
    this.Model.findAll((err, result) => {
      res.json({ "properties": result });
    });	
  }

  findOne({ params }, res) {
    this.Model.findOne(params._id, (err, result) => {
      res.json({ "properties": result });
    });
  }

  deleteOne({ params }, res) {
    this.Model.deleteOne(params._id, (err, result) => {
      res.json(result);
    });			
  }

  deleteByBody({ body }, res) {
    this.Model.deleteByBody(body.name, (err, result) => {
      res.json(result);
    });
  }  
}

module.exports = new PropertiesController(PropertiesModel);
