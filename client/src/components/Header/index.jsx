import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/logo.png";
import messageIcon from "../../assets/icons/message.png";
import ringIcon from "../../assets/icons/ring.png";
import styles from "./styles.module.scss";

export const HeaderOfJanitor = () => {
  return (
    <Navbar
      expand="lg"
      fixed="top"
      collapseOnSelect
      className={styles.headerOfJanitor}
    >
      <Container>
        <Navbar.Brand href="/janitor/trang-chu">
          <div className={styles.headerOfJanitorLogo}>
            <img
              src={logo}
              alt="logo"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link
              href="/janitor/trang-chu"
              className={styles.headerOfJanitorLink}
            >
              Trang chủ
            </Nav.Link>
            <Nav.Link
              href="/thong-tin-ca-nhan"
              className={styles.headerOfJanitorLink}
            >
              Thông tin cá nhân
            </Nav.Link>
            <Nav.Link href="/" className={styles.headerOfJanitorLink}>
              Đăng xuất
            </Nav.Link>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Nav.Link href="#" className={styles.headerLinkIcon}>
                <img
                  src={ringIcon}
                  alt="Icon"
                  style={{ width: "100%", height: "100%" }}
                />
              </Nav.Link>
              <Nav.Link href="/tin-nhan" className={styles.headerLinkIcon}>
                <img
                  src={messageIcon}
                  alt="Icon"
                  style={{ width: "100%", height: "100%" }}
                />
              </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export const Header = (props) => {
  const { image } = props;
  return (
    <Navbar expand="lg" fixed="top" collapseOnSelect className={styles.header}>
      <Container>
        <Navbar.Brand href="/trang-chu">
          <div className={styles.headerLogo}>
            <img
              src={logo}
              alt="logo"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/trang-chu" className={styles.headerLink}>
              Trang chủ
            </Nav.Link>
            <Nav.Link href="/cong-viec-collector" className={styles.headerLink}>
              Trang của tôi
            </Nav.Link>
          </Nav>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Nav.Link href="#" className={styles.headerLinkIcon}>
              <img
                src={ringIcon}
                alt="Icon"
                style={{ width: "100%", height: "100%" }}
              />
            </Nav.Link>
            <Nav.Link href="/tin-nhan" className={styles.headerLinkIcon}>
              <img
                src={messageIcon}
                alt="Icon"
                style={{ width: "100%", height: "100%" }}
              />
            </Nav.Link>
            <Dropdown>
              <Dropdown.Toggle
                as="div"
                value="transparent"
                id="dropdown-basic-button"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: "28px",
                    height: "28px",
                    marginRight: "3px",
                  }}
                >
                  <img src={image} alt="Icon" style={{height: '100%', width: '100%', borderRadius: '50px'}}/>
                </div>
              </Dropdown.Toggle>
              <Dropdown.Menu className={styles.menuDropdown}>
                <Dropdown.Item href="/thong-tin-ca-nhan">
                  Thông tin cá nhân
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="/">Đăng xuất</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
