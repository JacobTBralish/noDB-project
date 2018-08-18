const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const fT = require('./controllers/controller');




app.use(bodyParser.json());

//STEP2
app.get('/api/foodList',fT.getAllFoods);
app.post('/api/foodList', fT.createFood);

const port=4000
app.listen(port, () => console.log(`Listening on port ${port}`));
