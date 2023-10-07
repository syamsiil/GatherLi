import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import Home from "./pages/home";
import CardNews from "./pages/news";
import ArticlePage from "./pages/detailNews";
import CardProfile from "./components/CardProfile";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/news" element={<CardNews/>} />
        <Route path="/news/:id" element={<ArticlePage/>} />
        <Route path="/profile" element={<CardProfile/>} />
      </Routes>
    </>
  );
}

export default App;
