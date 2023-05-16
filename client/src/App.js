import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import UserInfoPage from "./pages/UserInfoPage";
import MessagePage from "./pages/MessagePage";
import MyWorkPageCollector from "./pages/MyWorkPage/Collector"
import MyWorkPageJanitor from "./pages/MyWorkPage/Janitor"
import ContentMessage from "./pages/ContentMessage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />}/>
      <Route path="/trang-chu" element={<HomePage />}/>
      <Route path="/thong-tin-ca-nhan" element={<UserInfoPage />}/>
      <Route path="/tin-nhan" element={<MessagePage />}/>
      <Route path="/cong-viec-collector" element={<MyWorkPageCollector />}/>
      <Route path="/cong-viec-janitor" element={<MyWorkPageJanitor />}/>
      <Route path="/tin-nhan/Nguyen-Thanh-Vin" element={<ContentMessage />}/>
    </Routes>
  );
}

export default App;
