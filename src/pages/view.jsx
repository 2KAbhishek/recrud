import { useState, useEffect } from "react";
import backend from "../backend";
import { useParams } from "react-router-dom";

export const View = () => {
  const [user, setUser] = useState({});
  const {id} = useParams();

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = () => {
    backend.get("/users/" + id + "/edit").then((res) => {
      setUser({
        name: res.data.name,
        email: res.data.email,
      });
    });
  };

  return (
    <div>
      <h2>View User</h2>
      <div className="row">
        <div className="col-sm-6 mx-auto card border rounded justify-content-center">
          <p htmlFor="name">Name</p>
          <p className="text-primary">{user.name}</p>
          <p htmlFor="email">Email</p>
          <p className="text-primary">{user.email}</p>
        </div>
      </div>
    </div>
  );
};
