import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import GoogleMapReact from "google-map-react";
import FormOfCollector from "../../components/FormOfCollector";
import FormOfJanitor from "../../components/FormOfJanitor";
import style from "./styles.module.scss";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const OfficerBody = (props) => {

  const {fullname, image} = props;

  const defaultProps = {
    center: {
      lat: 10.772138889167048,
      lng: 106.65794357140332,
    },
    zoom: 15,
  };

  return (
    <Container className={style.body}>
      <Row>
        <Col lg={4}>
          <div className={style.bodyInfo}>
            <div className={style.bodyInfoAvatar}>
              <img
                src={image}
                alt="avatar"
                style={{ width: "100%", height: "100%", borderRadius: '50px' }}
              />
            </div>
            <div className={style.bodyInfoName}>
              <p>{fullname}</p>
              <p>
                <b>Chức vụ:</b> officer
              </p>
            </div>
          </div>
          <div className={style.bodyCreate}>
            <div className={style.bodyCreateTitle}>Tạo công việc</div>
            <Tabs
              defaultActiveKey="collector"
              id="uncontrolled-tab-example"
              className="mb-3"
              justify
            >
              <Tab eventKey="collector" title="Collector">
                <FormOfCollector />
              </Tab>
              <Tab eventKey="janitor" title="Janitor">
                <FormOfJanitor />
              </Tab>
            </Tabs>
          </div>
        </Col>

        <Col lg={8}>
          <div style={{ height: "70vh", width: "100%" }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: "" }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
              yesIWantToUseGoogleMapApiInternals
              // onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
            >
              <AnyReactComponent
                lat={10.772138889167048}
                lng={106.65794357140332}
                text="My Marker"
              />
            </GoogleMapReact>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default OfficerBody;
