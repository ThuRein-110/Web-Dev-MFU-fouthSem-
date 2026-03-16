module.exports = function(users) {
  const express = require('express');
  const router = express.Router();

  // POST /login expects JSON { username, password }
  router.post('/login', (req, res) => {
    const { username, password } = req.body || {};
    const user = users.find(u => u.username === username && u.password === password);
    if (user) return res.status(200).json({ ok: true, message: 'Login successful' });
    return res.status(401).json({ ok: false, message: 'Invalid credentials' });
  });

  return router;
};
