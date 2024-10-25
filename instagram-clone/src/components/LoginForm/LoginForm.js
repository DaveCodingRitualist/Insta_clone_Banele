import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";
const LoginForm = ({ toggleForm }) => {
  // State to store email and password input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare login data
    const loginData = { email, password };

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });
      console.log("Response:", response); // Log the raw response
      const result = await response.json();

      if (response.ok) {
        console.log("Login successful:", result.token);
        // Store the token in localStorage
        localStorage.setItem("token", result.token);
        navigate("/home"); // Redirect to the dashboard or desired route
        setError(null);
      } else {
        setError(result.msg);
      }
    } catch (error) {
      console.error("Error during login:", error);
      setError("Login failed. Please try again later");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img
          className="instagramlogo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG86f0A8kWd7J0dy02aAB3A2zlXNvgvwRx7w&s"
          alt="IG-logo"
        />
        {/* Make sure to use `onSubmit` to handle form submission */}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Phone number, username, or email"
            className="input-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Bind state to input
          />
          <input
            type="password"
            placeholder="Password"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Bind state to input
          />
          <button type="submit" className="login-btn">
            Log in
          </button>
        </form>

        <div className="divider">
          <hr /> <span>OR</span> <hr />
        </div>

        <button className="login-fb">
          <i className="fab fa-facebook-square"></i> Log in with Facebook
        </button>
        <a href="#" className="forgot-password">
          Forgot password?
        </a>

        {/* Add this for "Create new account" */}
        <div className="signup-prompt">
          <p>
            Don't have an account? <button onClick={toggleForm}>Sign up</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
