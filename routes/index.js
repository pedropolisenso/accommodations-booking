const express = require('express');
const router = express.Router();

// Controllers
const PropertiesController = require('../controllers/properties');

// Main route
router.get('/', (req, res) => {
  res.render('index', { title: "application" });
});

// Endpoints
router.post('/api/v1/properties',
  PropertiesController.create.bind(PropertiesController)
);
router.get('/api/v1/properties',
  PropertiesController.findAll.bind(PropertiesController)
);
router.get('/api/v1/properties/:_id',
  PropertiesController.findOne.bind(PropertiesController)
);
router.delete('/api/v1/properties',
  PropertiesController.deleteByBody.bind(PropertiesController)
);
router.delete('/api/v1/properties/:_id',
  PropertiesController.deleteOne.bind(PropertiesController)
);

module.exports = router;
