const consign = require('consign');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressSessions = require('expressSessions')
const methodOverride = require('method-override');
const app = express();
const PORT = 3000


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(cookieParser("acampinho"));
app.use(expressSessions());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(methodOverride('_method'))
app.use(express.static(path.join(__dirname, 'public')));

consign({})
.include('models')
.then('controllers')
.then('routes')
.into(app);

app.listen(PORT, ()=>{
  console.log(`Server listening on port ${PORT}`);
})