const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const index = require('./routes/index');
const companyRoute = require('./routes/companyRoute');

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use('/', index);
app.use('/company', companyRoute);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});