import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { authAtom } from "../states/auth";

export function useAuthActions() {
  const baseUrl = `${process.env.REACT_APP_API_URL}/auth`;
  const [, setAuth] = useRecoilState(authAtom);
  const navigate = useNavigate();

  return {
    login,
    logout,
    register,
  };

  function login({ email, password }) {
    return axios
      .post(`${baseUrl}/signin`, { email, password })
      .then((user) => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem("user", JSON.stringify(user));
        setAuth(user);

        // get return url from location state or default to home page
        const { from } = navigate.location.state || { from: { pathname: "/" } };
        navigate.push(from);
      });
  }

  function logout() {
    // remove user from local storage, set auth state to null and redirect to login page
    localStorage.removeItem("user");
    setAuth(null);
    navigate.push("/browse");
  }

  function register(user) {
    return axios.post(`${baseUrl}/signup`, user);
  }
}
