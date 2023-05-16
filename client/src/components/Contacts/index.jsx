import Col from "react-bootstrap/esm/Col";
import styles from "./style.module.scss";
import Row from "react-bootstrap/esm/Row";

const Contacts = (props) => {
  const { urlAvatar, name, lastMessage, time } = props;
  return (
    <Row style={{ padding: 0, margin: 0 }}>
      <Col lg={12} className={styles.contacts}>
        <div className={styles.avatar}>
          <img
            src={urlAvatar}
            alt=""
            style={{ borderRadius: "50%", width: "100%", height: "100%" }}
          />
        </div>
        <div className={styles.contents}>
          <h6>{name}</h6>
          <p>{lastMessage}</p>
        </div>
        <div className={styles.time}>
          <p>{time} giờ</p>
        </div>
      </Col>
    </Row>
  );
};

export default Contacts;
