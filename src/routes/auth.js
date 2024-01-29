// Authentication routes
const express = require('express');
const router = express.Router();
const { hashPassword, verifyPassword, generateToken } = require('../auth');
const { createUser, getUserByEmail } = require('../user');

router.post('/register', async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = getUserByEmail(email);
    
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }
    
    const passwordHash = await hashPassword(password);
    const user = createUser(email, passwordHash);
    const token = generateToken(user.id);
    
    res.json({ user: user.toJSON(), token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = getUserByEmail(email);
    
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    const isValid = await verifyPassword(password, user.passwordHash);
    if (!isValid) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    const token = generateToken(user.id);
    res.json({ user: user.toJSON(), token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;