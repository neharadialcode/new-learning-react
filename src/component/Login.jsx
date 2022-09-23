import React, { useState } from "react";

const Login = () => {
  const [blank, setBlank] = useState(false);
  return (
    <div className="bg_blue vh-100 d-flex justify-content-center align-items-center">
      <div>
        <form className="border_5  px-2">
          <label className="text-white pe-3 " htmlFor="">
            NAME
          </label>
          <input
            required
            className="bg-transparent custom_border "
            type="text"
          />
          <div className="pt-5 text-center">
            <button onSubmit={() => setBlank()} className="btn btn-success">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
