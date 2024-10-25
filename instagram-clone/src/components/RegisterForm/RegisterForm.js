import { useState } from "react";
import "./RegisterForm.css";

const RegisterForm = ({ toggleForm }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      console.log(result);
      // You might want to redirect or show a success message here
    } catch (error) {
      console.error("Error during registration", error);
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
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            className="input-field"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            className="input-field"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            className="input-field"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit" className="login-btn">Register</button>
        </form>
        <p>
          Already have an account? <button onClick={toggleForm}>Log in</button>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
