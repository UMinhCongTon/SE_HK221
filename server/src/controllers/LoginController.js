const jwt = require("jsonwebtoken");
const Account = require("../models/account");

class LoginController {
  //[GET] /login
  login(req, res) {
    res.status(200).json("Mời bạn nhập tài khoản");
  }

  //[POST] /register
  async register(req, res) {
    try {
      const newUser = new Account({
        typeAccount: req.body.typeAccount,
        username: req.body.username,
        password: req.body.password,
        imageUrl: req.body.imageUrl,
      });
      const account = await newUser.save();
      res.status(200).json(account);
    } catch (error) {
      return res.status(500).json({ error: "ERROR!" });
    }
  }

  //[POST] /login
  async loginAccount(req, res) {
    try {
      const user = await Account.findOne({
        username: req.body.username,
        password: req.body.password,
      });
      if (!user) {
        res
          .status(404)
          .json("Tên đăng nhập không đúng hoặc mật khẩu không đúng");
      } else {
        const accessToken = jwt.sign(
          {
            username: user.username,
            typeAccount: user.typeAccount,
          },
          process.env.JWT_ACCESS_KEY,
          {
            expiresIn: "300s",
          }
        );
        return res.status(200).json({ user, accessToken });
      }
    } catch (error) {
      return res.status(500).json({ error: "ERROR!" });
    }
  }

  //[GET] /homepage
  homepage(req, res) {
    res.status(200).json("Đăng nhập thành công");
  }
}

module.exports = new LoginController();
