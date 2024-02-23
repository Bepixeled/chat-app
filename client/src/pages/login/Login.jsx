import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const loginUser = async (username, password) => {
    try {
      const res = await fetch("https://chat-app-5515.onrender.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ username, password }),
      });

      if (res.ok) {
        try {
          const data = await res.json();
          console.log("Response from server:", data);

          // Rest of the code
        } catch (error) {
          console.error("Error parsing JSON response:", error);
        }
      } else {
        const errorData = await res.json();
        console.error("Login failed:", errorData);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(username, password);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md shadow-black bg-dprussian_blue-200 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-Anton font-semibold text-dcharcoal-600 text-center mb-8">
          Login
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <div className="flex flex-col space-y-1">
            <label htmlFor="username" className="text-white">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="p-2 rounded-md shadow-md shadow-black text-black"
              autoComplete="username"
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="password" className="text-white">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-2 rounded-md shadow-md shadow-black text-black"
              autoComplete="current-password"
            />
          </div>
          <button
            type="submit"
            className="bg-dmidnight_green-500 text-white p-2 rounded-md shadow-md shadow-black hover:bg-dmidnight_green-600 transition duration-200"
          >
            Login
          </button>
        </form>
        <p className="text-xs mt-3">
          Don't have an account?{" "}
          <Link to="/signup" className="font-semibold hover:underline">
            Signup!
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
