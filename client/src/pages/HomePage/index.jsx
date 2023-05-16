import { Header, HeaderOfJanitor } from "../../components/Header";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeBody from "../../components/EmployeeBody";
import OfficerBody from "../../components/OfficerBody";
import banner from "../../assets/banner.png";
import Banner from "../../components/Banner";

const HomePage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      navigate("/");
    }
  });

  var uesrInfo = {
    typeAccount: parseInt(localStorage.getItem("typeAccount")),
    fullname: localStorage.getItem("fullname"),
    image: localStorage.getItem("image"),
  };

  return (
    <div style={{ backgroundColor: "#F8F9FA", paddingBottom: "20px" }}>
      {uesrInfo.typeAccount === 0 ? <Header image={uesrInfo.image}/> : <HeaderOfJanitor />}

      <Banner image={banner} alt="banner" />

      {uesrInfo.typeAccount === 0 ? <OfficerBody fullname={uesrInfo.fullname} image={uesrInfo.image}/> : <EmployeeBody />}
    </div>
  );
};

export default HomePage;
