const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
const routerTaqueria=require('./routes/taqueria.router');

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
});
app.use('/api/v1/taquerias',routerTaqueria);
app.listen(port, () => {
  console.log('Mi port:' +  port);
});

