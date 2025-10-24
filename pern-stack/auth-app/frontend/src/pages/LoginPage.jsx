import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage({ setUser }) {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await axios.post("/api/auth/login", form);
      setUser(res.data.user);
      navigate("/");
    } catch (error) {
      setError("Invalid email or password");
    }
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-full max-w-lg"
        action=""
      >
        <h2 className="text-2xl mb-6 font-bold text-center text-gray-800">
          Login
        </h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <input
          type="email"
          placeholder="email"
          className="border p-2 w-full mb-3"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="password"
          className="border p-2 w-full mb-3"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button className="p-2 bg-blue-500">Login</button>
      </form>
    </div>
  );
}
