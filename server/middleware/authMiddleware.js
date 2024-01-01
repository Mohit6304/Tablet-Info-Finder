const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized - Token not provided' });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach the decoded user information to the request
    req.user = decoded;
    
    if (req.user && req.user.role === 'admin') {
      req.isAdmin = true;
    }
    next();
  } catch (error) {
    return res.status(403).json({ error: 'Unauthorized - Invalid token' });
  }
};

module.exports = authMiddleware;
