const jwt = require("jsonwebtoken");

class MiddlewareController {
  verifyToken(req, res, next) {
    const token = req.headers.token;
    if (token) {
      const accessToken = token.split(" ")[1];
      jwt.verify(accessToken, process.env.JWT_ACCESS_KEY, (err, user) => {
        if (err) {
          return res.status(403).json("Token không có giá trị");
        }
        req.user = user;
        next();
      });
    } else {
      return res.status(401).json("Bạn chưa đăng nhập");
    }
  }
}

module.exports = new MiddlewareController();
