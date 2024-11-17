const express = require('express');
const router = express.Router();
const User = require('../models/userModel'); // Import the user model

// 1. Route for $or: Find users with age 20 or username 'admin'
router.get('/or', async (req, res) => {
  try {
    const users = await User.find({
      $or: [{ age: 20 }, { username: 'admin' }]
    });

    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users with $or:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// 2. Route for $and: Find users with age 20 and username 'admin'
router.get('/and', async (req, res) => {
  try {
    const users = await User.find({
      $and: [{ age: 20 }, { username: 'admin' }]
    });

    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users with $and:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// 3. Route for $not: Find users whose age is not less than or equal to 30
router.get('/not', async (req, res) => {
  try {
    const users = await User.find({
      age: { $not: { $lte: 30 } }
    });

    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users with $not:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// 4. Route for $nor: Find users whose age is not 20 and username is not 'admin'
router.get('/nor', async (req, res) => {
  try {
    const users = await User.find({
      $nor: [{ age: 20 }, { username: 'admin' }]
    });

    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users with $nor:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
