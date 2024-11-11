const jwt = require('jsonwebtoken')

const validateToken = (req, res, next) => {
  const secretkey = "18113";
  const token = req.headers.authorization;
  console.log(token);
  if (!token) {
    return res.status(401).json({ message: "invalid request" });
  }

  try {
    const validate = jwt.verify(token, secretkey);
    console.log(validate);
    const exp = validate.exp
    if(exp<(Date.now()/1000)){
        return res.status(500).json({message : "token expired"})
    }
    const role = validate.role
    if (!role) {
        return res.status(500).json({ message: "Invalid Access" })
    }
    next();
  } catch (error) {
    return res.status(500).json({ message: "invalid token", error: error });
  }
};

const validateTokenAdmin = (req, res, next) => {

  const secretkey = '1811321'
  const token = req.headers.authorization
  // console.log(token)
  if (!token) {
      return res.status(401).json({ message: "Invalid Request" })
  }
  try {
      const validate = jwt.verify(token, secretkey)
      const exp = validate.exp
      if (exp < (Date.now() / 1000)) {
          return res.status(500).json({ message: "Token Expired" })
      }
      const role = validate.role
      if (role !== "ADMIN") {
          return res.status(500).json({ message: "Invalid Access" })
      }
      next()
  } catch (error) {
      return res.status(500).json({ message: "Invalid token" })
  }
}

module.exports = validateToken;
