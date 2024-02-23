import { useState } from "react";

const useSignup = () => {
  const [loading, setLoading] = useState(false);

  function handleInputErrors({ name, username, password, confirmPassword }) {
    if (!name || !username || !password || !confirmPassword) {
      alert("Please fill in all fields");
      return false;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return false;
    }
    if (password.length < 8) {
      alert("Password must be at least 8 characters long");
      return false;
    }
    return true;
  }

  const signup = async ({ name, username, password, confirmPassword }) => {
    const success = handleInputErrors({
      name,
      username,
      password,
      confirmPassword,
    });
    if (success) return;

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
            name: name,
            username: username,
            password: password,
            confirmPassword: confirmPassword,
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
      console.log("Received response:", res);
      console.log("Response body:", data);

      // localStorage.setItem("token", data.token);
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
};

export default useSignup;
