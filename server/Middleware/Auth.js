
const jwt = require('jsonwebtoken');
const User = require('../Model/data'); // or your updated User model

const protect = async (req, res, next) => {
  const token = req.cookies?.token;

  if (!token) {
    return res.status(401).json({ message: 'Not authorized, no token' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWTSECRET);
    req.user = await User.findById(decoded.id).select('-password');
 
    next();
  } catch (error) {
    console.error('Token verification failed:', error);
    res.status(401).json({ message: 'Not authorized, token failed' });
  }
};

module.exports = protect;
