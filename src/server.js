const express = require('express');
const config = require('./config');

const app = express();

const AltasController = require('./controllers/AltasController');

app.get('/altas', AltasController.index);

app.listen(config.PORT, () => {
  console.log(`Server is running ... url: http://localhost:${config.PORT}`);
});
