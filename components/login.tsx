import React, { useState } from "react";
import { useRouter } from "next/router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const styled = {
    borderTop: "5px solid #ee3344",
    borderBottom: "5px solid #ee3344",
    padding: "15px",
    margin: "15px",
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace this with your authentication logic
    const loginPayload = {
        email: email,
        password: password,
        roleType: "owner"
    }
    console.log("login:", loginPayload);

    // Navigate to the /about page upon successful login
    router.push("/dashboard");
  };

  return (
    <>
      <div className="container" style={styled}>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-action mt-2">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
