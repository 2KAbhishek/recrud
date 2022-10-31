export const Create = () => {
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
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            required
            className="form-control m-2"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            required
            className="form-control m-2"
          />
          <button type="button" className="btn btn-success col-sm-6 m-2">
            Create
          </button>
        </div>
      </div>
    </div>
  );
};
