const jwt = require("jsonwebtoken");
module.exports = function auth(req, res, next) {
  const token = req.header("auth-token");
  if (!token) return res.status(401).send("Acess Denied");

  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    if (
      (verified.campus == "ktr" || verified.campus == "all") &&
      (verified.school == "school of computing" || verified.school == "all") &&
      (verified.role == "hod" ||
        verified.role == "chairperson" ||
        verified.role == "all")
    ) {
      next();
    } else {
      res.send("unauthorized access");
    }
  } catch (err) {
    console.log(err);
    res.status(400).send("invalid token");
  }
};
