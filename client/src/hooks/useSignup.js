import { useState } from "react";
import { toast } from "react-hot-toast";

const useSignup = () => {
  const [loading, setLoading] = useState(false);

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
        "http://localhost:8080/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            
          },
          body: JSON.stringify({
            name,
            username,
            password,
            confirmPassword,
          }),
        }
      );

      console.log("Received response:", res);

      if (!res.ok) {
        const errorData = await res.json();
        toast.error(errorData.message || "Signup failed");
        return;
      }

      const data = await res.json();
      console.log("Received response:", res);
      console.log("Response body:", data);
      if (data.error) {
        toast.error(data.error);
        return;
      }
      localStorage.setItem("token", data.token);

      toast.success("Signup successful");
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
};

export default useSignup;

function handleInputErrors({ name, username, password, confirmPassword }) {
  if (!name || !username || !password || !confirmPassword) {
    toast.error("Please fill in all fields");
    return false;
  }
  if (password !== confirmPassword) {
    toast.error("Passwords do not match");
    return false;
  }
  if (password.length < 8) {
    toast.error("Password must be at least 8 characters long");
    return false;
  }
  return true;
}
