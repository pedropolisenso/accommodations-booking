const express = require('express');
const es6Renderer = require('express-es6-template-engine');
const app = express();

//  HTTP Verbs
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const path = require('path');
const routes = require('./routes');

// Methods Override
app.use(methodOverride('X-HTTP-Method'));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(methodOverride('X-Method-Override'));
app.use(methodOverride('_method'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', express.static(path.join(__dirname, '/public')));

// Public Route
app.engine('html', es6Renderer);
app.set('views', './public');
app.set('view engine', 'html');

app.use('/', routes);
app.use((req, res, next) => {
  res.render('404', { title: "404 Error!" });
});

// Server
const server = app.listen(3000, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Application running in http://%s:%s', host, port);
});
