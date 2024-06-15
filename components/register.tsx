import React, { useState } from "react";
import { useRouter } from "next/router";

interface FormData {
  fullName: string;
  blockNumber: string;
  flatFloorNumber: string;
  mobileNumber: string;
  email: string;
  password: string;
  confirmPassword: string;
  roleType: "owner" | "admin";
}

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    blockNumber: "1",
    flatFloorNumber: "1A",
    mobileNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
    roleType: "owner",
  });
  const styled = {
    borderTop: "5px solid #eee",
    borderBottom: "5px solid #eee",
    padding: "15px",
    margin: "15px",
  };
  const blockNumbers = ["1", "2", "3", "4", "5", "6", "7"];
  const flatFloorNumbers = [
    "1A",
    "2A",
    "3A",
    "4A",
    "1B",
    "2B",
    "3B",
    "4B",
    "1C",
    "2C",
    "3C",
    "4C",
    "1D",
    "2D",
    "3D",
    "4D",
    "1E",
    "2E",
    "3E",
    "4E",
    "1F",
    "2F",
    "3F",
    "4F",
    "1G",
    "2G",
    "3G",
    "4G",
    "1H",
    "2H",
    "3H",
    "4H",
    "1I",
    "2I",
    "3I",
    "4I",
    "1J",
    "2J",
    "3J",
    "4J",
    "1K",
    "2K",
    "3K",
    "4K",
    "1L",
    "2L",
    "3L",
    "4L",
    "1M",
    "2M",
    "3M",
    "4M",
    "1N",
    "2N",
    "3N",
    "4N",
  ];
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const router = useRouter();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    const errors: Partial<FormData> = {};
    if (!formData.fullName) errors.fullName = "Full name is required";
    if (!formData.blockNumber) errors.blockNumber = "Block number is required";
    if (!formData.flatFloorNumber)
      errors.flatFloorNumber = "Flat floor number is required";
    if (!formData.mobileNumber)
      errors.mobileNumber = "Mobile number is required";
    if (!formData.email) errors.email = "Email is required";
    if (!formData.password) errors.password = "Password is required";
    if (formData.password !== formData.confirmPassword)
      errors.confirmPassword = "Passwords do not match";
    return errors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Replace this with your registration logic
      console.log("Form Data:", formData);
      postRegistration(formData)
    }
  };

  const postRegistration = async(obj: any) => {
    const token = '';

    const myHeaders = new Headers();
    myHeaders.append("authorization", "Bearer " + token);
    myHeaders.append("content-type", "application/json");

    const raw = JSON.stringify({
      "email": obj.email,
      "password": obj.password,
      "name": obj.fullName,
      "role_type": obj.roleType,
      "payment": false,
      "phone_number": obj.mobileNumber,
      "blockflat": obj.blockNumber + "-" + obj.flatFloorNumber,
      "timestamp": new Date().toISOString()
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw
    };

    fetch("/api/users", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        // Navigate to a different page upon successful registration
        alert("Registration successful!");
        router.push("/");
      })
      .catch((error) => console.error(error));

  }

  return (
    <div className="container" style={styled}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            className="form-control"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
          {errors.fullName && <p className="text-danger">{errors.fullName}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="blockNumber">Block Number</label>
          <select
            className="form-control"
            id="blockNumber"
            name="blockNumber"
            value={formData.blockNumber}
            onChange={handleChange}
            required
          >
            <option value="">Select Block Number</option>
            {blockNumbers.map((number) => (
              <option key={number} value={number}>
                {number}
              </option>
            ))}
          </select>
          {errors.blockNumber && (
            <p className="text-danger">{errors.blockNumber}</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="flatFloorNumber">Flat Floor Number</label>
          <select
            className="form-control"
            id="flatFloorNumber"
            name="flatFloorNumber"
            value={formData.flatFloorNumber}
            onChange={handleChange}
            required
          >
            <option value="">Select Flat Floor Number</option>
            {flatFloorNumbers.map((number) => (
              <option key={number} value={number}>
                {number}
              </option>
            ))}
          </select>
          {errors.flatFloorNumber && (
            <p className="text-danger">{errors.flatFloorNumber}</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="mobileNumber">Mobile Number</label>
          <input
            type="text"
            className="form-control"
            id="mobileNumber"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            required
          />
          {errors.mobileNumber && (
            <p className="text-danger">{errors.mobileNumber}</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <p className="text-danger">{errors.email}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {errors.password && <p className="text-danger">{errors.password}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          {errors.confirmPassword && (
            <p className="text-danger">{errors.confirmPassword}</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="roleType">Role Type</label>
          <select
            className="form-control"
            id="roleType"
            name="roleType"
            value={formData.roleType}
            onChange={handleChange}
            required
          >
            <option value="owner">Owner</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
