const express = require('express');
const router = express.Router();

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

// get all ideas
router.get('/', (req, res) => {
  res.json({ success: true, data: ideas });
});

// get single idea
router.get('/:id', (req, res) => {
  const idea = ideas.find((idea) => idea.id === +req.params.id);

  if (!idea) {
    return res
      .status(404)
      .json({ success: false, error: 'Resource not found' });
  }

  res.json({ success: true, data: idea });
});

module.exports = router;
