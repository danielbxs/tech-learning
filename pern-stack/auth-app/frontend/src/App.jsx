import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import axios from "axios";
import NotFound from "./components/NotFound";

axios.defaults.withCredentials = true;

export default function App() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("/api/auth/me");
        setUser(res.data);
      } catch (err) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  if (loading) {
    return (
      <div className="bg-gray-800 min-h-screen text-white">Loading...</div>
    );
  }

  return (
    <BrowserRouter>
      <NavBar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<HomePage user={user} error={error} />} />
        <Route
          path="/login"
          element={user ? <Navigate to="/" /> : <LoginPage setUser={setUser} />}
        />
        <Route
          path="/register"
          element={
            user ? <Navigate to="/" /> : <RegisterPage setUser={setUser} />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
