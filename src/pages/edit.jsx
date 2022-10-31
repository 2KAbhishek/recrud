import { useState, useEffect } from "react";
import backend from "../backend";
import { useNavigate, useParams } from "react-router-dom";

export const Edit = () => {
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();
  const {id} = useParams();

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = () => {
    backend.get("/users/" + id + "/edit").then((res) => {
      setInputs({
        name: res.data.name,
        email: res.data.email,
      });
    });
  };

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    backend.put("/users/"+id, inputs).then((res) => {
      navigate("/");
    });
  };

  return (
    <div>
      <h2>Edit User</h2>
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
          <button
            type="button"
            onClick={handleSubmit}
            className="btn btn-info col-sm-6 m-2"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};
