import React from "react";
import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const service = useLoaderData();
  console.log(service);
  const { title, _id } = service;

  return (
    <div>
      CheckOut{title}
     <form >
     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="text"
            placeholder="email"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="text"
            placeholder="password"
            className="input input-bordered"
          />
         
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="text"
            placeholder="password"
            className="input input-bordered"
          />
         
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="text"
            placeholder="password"
            className="input input-bordered"
          />
         
        </div>
        <div className="form-control mt-6">
          
          <input className="btn btn-primary btn-block" type="submit" value="Order Confirm" />
        </div>
      </div>
     </form>
    </div>
  );
};

export default CheckOut;
