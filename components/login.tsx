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

  const [role, setRole] = useState("");

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const token = "";

  const myHeaders = new Headers();
  // myHeaders.append("authorization", "Bearer " + token);
  myHeaders.append("content-type", "application/json");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace this with your authentication logic
    const loginPayload = JSON.stringify({
      email: email,
      password: password,
      role_type: role,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: loginPayload,
    };

    fetch("/api/login", requestOptions)
      .then((result) => {
        console.log(result);
        // Navigate to a different page upon successful registration
        alert("Login successful!");
        // Navigate to the /about page upon successful login
        router.push("/dashboard");
      })
      .catch((error) => console.error(error));
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
          <div className="form-group">
            <label htmlFor="role">Role</label>
            <div className="d-flex">
            <div className="form-check mr-3">
              <input
                type="radio"
                id="adminRole"
                name="role"
                value="admin"
                checked={role === "admin"}
                onChange={handleRoleChange}
                required
              />
              <label htmlFor="adminRole"> Admin</label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                id="ownerRole"
                name="role"
                value="owner"
                checked={role === "owner"}
                onChange={handleRoleChange}
                required
              />
              <label htmlFor="ownerRole"> Owner</label>
            </div>
            </div>
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
