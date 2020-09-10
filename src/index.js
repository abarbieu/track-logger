const express = require('express');

const app = express();

app.get('/', (req, res, next) => {
  res.send({ msg: 'hello world' });
});

app.listen(process.env.PORT || 8080, () =>
  console.log(
    `Website running at http://${process.env.IP || 'localhost'}:${process.env
      .PORT || '8080'}`
  )
);
