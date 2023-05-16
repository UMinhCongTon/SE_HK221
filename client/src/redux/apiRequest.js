import axios from "axios";
import {
  loginFail,
  loginStart,
  loginSuccess,
} from "./loginSlice";

export const loginUser = async (user, dispatch, navigate) => {
  dispatch(loginStart());
  try {
    const response = await axios.post("http://localhost:8000/login", user);
    if (response.data) {
      dispatch(loginSuccess(response.data));
      localStorage.setItem("accessToken", response.data.accessToken);
      localStorage.setItem("typeAccount", response.data.user.typeAccount);
      localStorage.setItem("fullname", response.data.user.fullname);
      localStorage.setItem("image", response.data.user.imageUrl)
      navigate("/trang-chu");
    }
  } catch (error) {
    dispatch(loginFail());
  }
};
