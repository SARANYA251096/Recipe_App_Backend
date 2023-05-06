const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    jwt.verify(authHeader, process.env.JWT_SECRET, (err) => {
      if (err) {
        const errorMessage =
          err.name === "JsonWebTokenError" ? "Invalid token" : "Token expired";
         res.status(403).json({ message: errorMessage });
        console.log(errorMessage);
      }
      next();
    });
  } else {
    res.sendStatus(401);
  }
};


module.exports = { verifyToken };
