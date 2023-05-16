import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../../assets/background-image.png";
import { loginUser } from "../../redux/apiRequest";
import style from "./style.module.scss";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLoginForm = (event) => {
    event.preventDefault();
    const loginAccount = {
      username: username,
      password: password,
    };
    loginUser(loginAccount, dispatch, navigate);
  }

  return (
    <Container
      fluid
      className={style.login}
      style={{
        width: "100vw",
        height: "100vh",
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <Row>
        <Col lg={6} md={{ span: 6, offset: 3 }}>
          <h1 className={style.loginTitle}>Đăng nhập</h1>

          <Form className={style.loginForm} onSubmit={handleLoginForm}>
            <Form.Group
              className={style.loginFormItem}
              style={{ marginBottom: "67px" }}
            >
              <Form.Control
                className={style.loginFormItemFill}
                type="text"
                placeholder="Tên đăng nhập"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group
              className={style.loginFormItem}
              style={{ marginBottom: "19px" }}
            >
              <Form.Control
                className={style.loginFormItemFill}
                type="password"
                placeholder="Mật khẩu"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>
            <div className={style.loginForgot}>
              <Link
                to="/quen-mat-khau"
                className={style.loginForgotLink}
                style={{ marginRight: "30px" }}
              >
                Quên mật khẩu
              </Link>
              <Link
                to="/dang-ky-tai-khoan"
                className={style.loginForgotLink}
                style={{ marginRight: "10px" }}
              >
                Tạo tài khoản
              </Link>
            </div>
            <Form.Group className={style.loginFormCheck}>
              <Form.Check
                type="checkbox"
                label="Duy trì đăng nhập cho lần sau"
              />
            </Form.Group>
            <Button
              className={style.loginFormBtn}
              variant="primary"
              type="submit"
            >
              Đăng nhập
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
