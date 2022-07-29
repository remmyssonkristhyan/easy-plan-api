const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const index = require('./routes/index');
const businessRoute = require('./routes/businessRoute');

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use('/', index);
app.use('/business', businessRoute);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});