const express = require('express');
const port = 5000;

const app = express();

app.get('/', (req, res) => {
  res.json('Hello World');
});

const ideasRouter = require('./routes/ideas');
app.use('/api/ideas', ideasRouter);

app.listen(port, () => console.log(`Server lisening on port ${port}`));
