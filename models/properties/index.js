const mongo = require('../../DB/mongo');

class PropertiesModel {
  create(data, callback) {
    mongo.collection('accommodations').save(data, callback);
  }

  findAll(callback) {
    mongo.collection('accommodations').find({}, callback);
  };

  findOne(_id, callback) {
    mongo.collection('accommodations').findOne({ "_id": mongo.ObjectId(_id) }, callback);
  };

  deleteOne(_id, callback) {
    mongo.collection('accommodations').remove({ _id: mongo.ObjectId(_id) }, callback);
  }

  deleteByBody(name, callback) {
    mongo.collection('accommodations').remove({ name }, callback);
  }
}

module.exports = new PropertiesModel();
