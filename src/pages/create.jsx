import { useState } from "react";
import backend from "../backend";
import { useNavigate } from "react-router-dom";

export const Create = () => {
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    backend.post("/users", inputs).then((res) => {
      navigate("/");
    });
  };

  return (
    <div>
      <h2>Create User</h2>
      <div className="row">
        <div className="col-sm-6 mx-auto justify-content-center">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            required
            className="form-control m-2"
            value={inputs.name || ""}
            onChange={handleChange}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            required
            className="form-control m-2"
            value={inputs.email || ""}
            onChange={handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            required
            className="form-control m-2"
            value={inputs.password || ""}
            onChange={handleChange}
          />
          <button
            type="button"
            onClick={handleSubmit}
            className="btn btn-success col-sm-6 m-2"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};
