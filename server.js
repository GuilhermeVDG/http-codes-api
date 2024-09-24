const express = require('express');
const cors = require('cors'); 
const app = express();
const port = process.env.PORT || 3122;
const httpCodesRoutes = require('./routes/http');

app.use(cors());

app.use(express.static('public'));

app.use('/', httpCodesRoutes);

app.listen(port, () => {
  console.log(`API rodando em http://localhost:${port}`);
});
