import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function NavBar({ user, setUser }) {
  const navigate = useNavigate();

  async function handleLogout() {
    await axios.post("/api/auth/logout");
    setUser(null);
    navigate("/");
  }

  return (
    <nav className="bg-gray-800  text-white ">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="font-bold">
          PERN Auth
        </Link>
        <div>
          {user ? (
            <button
              className="bg-red-500 px-3 py-1 rounded"
              onClick={handleLogout}
            >
              Logout
            </button>
          ) : (
            <>
              <Link to="/login" className="mx-2">
                Login
              </Link>
              <Link to="/Register" className="mx-2">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
