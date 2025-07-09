const jwt = require('jsonwebtoken');
const User = require('../Model/data');

const protect = async (req, res, next) => {
  const token = req.cookies?.token;
  console.log('Incoming token:', token); // ✅ Debugging line

  if (!token) {
    return res.status(401).json({ message: 'Not authorized, no token' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWTSECRET);
    console.log('Decoded token:', decoded); // ✅ Debugging line

    req.user = await User.findById(decoded.id).select('-password');
    console.log('Authenticated user:', req.user); // ✅ Debugging line

    if (!req.user) {
      return res.status(404).json({ message: 'User not found' });
    }

    next();
  } catch (error) {
    console.error('Token verification failed:', error);
    res.status(401).json({ message: 'Not authorized, token failed' });
  }
};

module.exports = protect;
