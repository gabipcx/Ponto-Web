const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));


app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');


const formRoutes = require('./routes/formRoutes');
app.use('/forms', formRoutes);


app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
