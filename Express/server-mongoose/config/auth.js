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
    next();
  } catch (error) {
    return res.status(500).json({ message: "invalid token", error: error });
  }
};
module.exports = validateToken;
