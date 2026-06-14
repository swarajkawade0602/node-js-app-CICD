const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hellooooo from jenkins, added webhook, we are from 18 May batch and we are learning CI/CD');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
