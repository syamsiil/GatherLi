import { Routes, Route, useNavigate, Navigate, Outlet } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import Home from "./pages/home";
import Community from "./pages/community";
import { RootState } from "./stores/types/rootState";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { API, setAuthToken } from "./libs/api";
import { AUTH_CHECK, AUTH_ERROR } from "./stores/rootReducer";
import CardNews from "../src/components/CardNews";
// import ArticlePage from "../src/pages/detailNews";
import CardProfile from "../src/components/CardProfile";
import CommunityDetail from "../src/pages/DetailPorjectRoute";
import DetailCard from "../src/pages/detailCard";
import CreateCard from "./pages/createCard";

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const auth = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function authCheck() {
    try {
      setAuthToken(localStorage.token);
      const response = await API.get("/auth/check");
      dispatch(AUTH_CHECK(response.data));
      // console.log("auth check berhasil", response);
      setIsLoading(false);
    } catch (err) {
      dispatch(AUTH_ERROR());

      setIsLoading(false);
      navigate("/");
      console.log("auth error:", err);
    }
  }

  useEffect(() => {
    if (localStorage.token) {
      authCheck();
    } else {
      setIsLoading(false);
      // navigate("/login");
    }
  }, []);

  function IsLogin() {
    if (!auth.username) {
      return <Navigate to={"/login"} />;
    } else {
      return <Outlet />;
    }
  }

  function IsNotLogin() {
    if (auth.username) {
      return <Navigate to={"/"} />;
    } else {
      return <Outlet />;
    }
  }
  return (
    <>
      {isLoading ? null : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<IsLogin />}>
            <Route path="/threads" element={<Community />} />
            <Route path="/news" element={<CardNews />} />
            <Route path="/detailcard/:id" element={<DetailCard />} />
            <Route path="/card" element={<CreateCard />} />
            {/* <Route path="/news/:id" element={<ArticlePage />} /> */}
            <Route path="/profile" element={<CardProfile />} />
            <Route path="/detail/:id" element={<CommunityDetail />} />
            {/* <Route path="/detail/:id" element={< />} /> */}
          </Route>
          <Route path="/" element={<IsNotLogin />}>
            <Route path="register" element={<Register />}></Route>
            <Route path="login" element={<Login />}></Route>
          </Route>
        </Routes>
      )}
    </>
  );
}

export default App;
