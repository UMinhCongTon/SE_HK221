import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Form from "react-bootstrap/Form";
import styles from "./styles.module.scss";
// import Header from "../../components/Header";
import { Header } from "../../components/Header";
import Phone from "@mui/icons-material/Phone";
import VideoCameraFrontIcon from "@mui/icons-material/VideoCameraFront";
import AddCircleSharpIcon from "@mui/icons-material/AddCircleSharp";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import WestIcon from "@mui/icons-material/West";

//Generate my message
function myMessage(messages = []) {
  return (
    <Container className={[styles.clusterMessage, styles.myMessage].join(" ")}>
      <Row>
        <Col sm="auto" className={styles.cluster}>
          {messages.map((message) => (
            <Row>
              <Col sm="auto" className={styles.message}>
                {message}
              </Col>
            </Row>
          ))}
        </Col>
      </Row>
    </Container>
  );
}

//Generate contacts message
function contactMessage(urlAvatar, messages = []) {
  return (
    <Container className={styles.clusterMessage}>
      <Row>
        <Col sm="auto" className={styles.avatar}></Col>
        <Col sm="auto" className={styles.cluster}>
          {messages.map((message) => (
            <Row>
              <Col sm="auto" className={styles.message}>
                {message}
              </Col>
            </Row>
          ))}
        </Col>
      </Row>
    </Container>
  );
}

//Create time line
function timeLine(time) {
  return <Row className={styles.timeLine}>{time}</Row>;
}

const ContentMessage = () => {
  return (
    <div style={{height: '100vh'}}>
      <Header />
      <Container className={styles.body}>
        <Row>
          <Col sm={12}>
            <div className={styles.bodyInfoUser}>
              <div className={styles.icon} style={{ marginRight: "20px" }}>
                <WestIcon sx={{ fontSize: 30 }} />
              </div>
              <div className={styles.avatar}>
                <img
                  src="http://www.elle.vn/wp-content/uploads/2017/07/25/hinh-anh-dep-1.jpg"
                  alt=""
                  style={{
                    borderRadius: "50%",
                    width: "37px",
                    height: "37px",
                  }}
                />
                <p>Pham Thanh Vinh</p>
              </div>
              <div className={styles.icon}>
                <Phone sx={{ fontSize: 30 }} style={{ marginRight: "15px" }} />
                <VideoCameraFrontIcon sx={{ fontSize: 30 }} />
              </div>
            </div>
            <Container className={styles.mainChat}>
              {contactMessage("aaaa", [
                "aaaaaa",
                "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
              ])}
              {contactMessage("aaaa", [
                "aaaaaa",
                "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
              ])}
              {timeLine("18:30")}
              {myMessage([
                "aaaaaa",
                "aaaaaaaaaaaaaaaaaaaaaaaa",
                "aaaaaaaaaaaaaaaaaaaa",
              ])}
              {contactMessage("aaaa", [
                "aaaaaa",
                "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
              ])}
              {myMessage(["aaaaa", "aaaaa"])}
              {contactMessage("aaaa", [
                "aaaaaa",
                "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
              ])}
              {contactMessage("aaaa", [
                "aaaaaa",
                "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
              ])}
              {myMessage([
                "aaaaaa",
                "aaaaaaaaaaaaaaaaaaaaaaaa",
                "aaaaaaaaaaaaaaaaaaaa",
              ])}
              {contactMessage("aaaa", [
                "aaaaaa",
                "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
              ])}
              {myMessage(["aaaaa", "aaaaa"])}
              {contactMessage("aaaa", [
                "aaaaaa",
                "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
              ])}
              {contactMessage("aaaa", [
                "aaaaaa",
                "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
              ])}
              {myMessage([
                "aaaaaa",
                "aaaaaaaaaaaaaaaaaaaaaaaa",
                "aaaaaaaaaaaaaaaaaaaa",
              ])}
              {contactMessage("aaaa", [
                "aaaaaa",
                "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
              ])}
              {myMessage(["aaaaa", "aaaaa"])}
              {timeLine("20:00")}
              {contactMessage("aaaa", [
                "aaaaaa",
                "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
              ])}
              {contactMessage("aaaa", [
                "aaaaaa",
                "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
              ])}
              {myMessage([
                "aaaaaa",
                "aaaaaaaaaaaaaaaaaaaaaaaa",
                "aaaaaaaaaaaaaaaaaaaa",
              ])}
              {contactMessage("aaaa", [
                "aaaaaa",
                "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
              ])}
              {myMessage(["aaaaa", "aaaaa"])}
            </Container>
            <div className={styles.functionBar}>
              <div className={styles.icon}>
                <AddCircleSharpIcon sx={{ fontSize: 30 }} style={{marginRight: '8px'}} />
                <ImageOutlinedIcon sx={{ fontSize: 30 }} style={{marginRight: '8px'}} />
              </div>
              <Form.Group className={styles.inputMess}>
                <Form.Control placeholder="Enter message" />
                <PlayCircleIcon
                  sx={{ fontSize: 30 }}
                  type="submit"
                  className={styles.icon}
                  style={{marginLeft: '8px'}}
                />
              </Form.Group>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContentMessage;
