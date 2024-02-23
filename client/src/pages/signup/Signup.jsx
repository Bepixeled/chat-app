import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const Signup = () => {
  const [loading, setLoading] = useState(false);
  const [inputs, setInputs] = useState({
    name: "",
    username: "",
    password: "",
    confirmPassword: "",
  });



  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      console.log("Sending signup request...");
      const res = await fetch(
        "https://chat-app-5515.onrender.com/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: inputs.name,
            username: inputs.username,
            password: inputs.password,
            confirmPassword: inputs.confirmPassword,
          }),
        }
      );
  
      console.log("Received response:", res);
  
      if (!res.ok) {
        const errorData = await res.json();
        console.error(errorData.message || "Signup failed");
        return;
      }
  
      const data = await res.json();
      console.log("Response body:", data);
  
      // localStorage.setItem("token", data.token);
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md shadow-black bg-dprussian_blue-200 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-Anton font-semibold text-dcharcoal-600 text-center mb-8">
          SignUp
        </h1>
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="flex flex-col space-y-4"
        >
          <div className="flex flex-col space-y-1">
            <label htmlFor="name" className="text-white">
              Name
            </label>
            <input
              value={inputs.name}
              onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
              type="text"
              id="name"
              className="p-2 rounded-md shadow-md shadow-black text-black"
              autoComplete="name"
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="username" className="text-white">
              Username
            </label>
            <input
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
              type="text"
              id="username"
              className="p-2 rounded-md shadow-md shadow-black text-black"
              autoComplete="username"
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="password" className="text-white">
              Password
            </label>
            <input
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
              type="password"
              id="password"
              className="p-2 rounded-md shadow-md shadow-black text-black"
              autoComplete="current-password"
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="confirmPassword" className="text-white">
              Confirm Password
            </label>
            <input
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
              type="password"
              id="confirmPassword"
              className="p-2 rounded-md shadow-md shadow-black text-black"
              autoComplete="current-password"
            />
          </div>
          <button
            type="submit"
            className="bg-dmidnight_green-500 text-white p-2 rounded-md shadow-md shadow-black hover:bg-dmidnight_green-600 transition duration-200"
          >
            SignUp
          </button>
        </form>
        <p className="text-xs mt-3">
          Already have an account?{" "}
          <Link to="/login" className="font-semibold hover:underline">
            Login!
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
