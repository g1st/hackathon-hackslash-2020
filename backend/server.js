const express = require ('express');
const PORT = process.env.PORT || 4000;
const app = express ();

app.get ('/', (req, res) => {
  res.send ('Hack Slash');
});

app.listen (PORT, () => console.log (`Server is listening on port ${PORT}`));
