const express = require('express');
const port = 5000;

const app = express();

const ideas = [
  {
    id: 1,
    text: 'Build a todo app',
    tag: 'react',
    username: 'john',
    date: '2021-05-12',
  },
  {
    id: 2,
    text: 'Build a weather app',
    tag: 'node',
    username: 'jane',
    date: '2021-05-13',
  },
  {
    id: 3,
    text: 'Build a chat app',
    tag: 'react',
    username: 'john',
    date: '2021-05-14',
  },
];

app.get('/', (req, res) => {
  res.json('Hello World');
});

// get all ideas
app.get('/api/ideas', (req, res) => {
  res.json({ success: true, data: ideas });
});

app.get('/api/ideas/:id', (req, res) => {
  const idea = ideas.find((idea) => idea.id === +req.params.id);

  if (!idea) {
    return res
      .status(404)
      .json({ success: false, error: 'Resource not found' });
  }

  res.json({ success: true, data: idea });
});

app.listen(port, () => console.log(`Server lisening on port ${port}`));
