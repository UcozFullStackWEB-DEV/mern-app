import React from "react";

export default function UserPageHead({ location, status, handle }) {
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="card card-body bg-info text-white mb-3">
          <div className="row">
            <div className="col-4 col-md-3 m-auto">
              <img
                className="rounded-circle"
                src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
                alt=""
              />
            </div>
          </div>
          <div className="text-center">
            <h1 className="display-4 text-center">{handle}</h1>
            <p className="lead text-center">{status}</p>
            <p>{location ? location : "No location"}</p>
            <p>
              <a className="text-white p-2" href="/">
                <i className="fa fa-globe fa-2x" />
              </a>
              <a className="text-white p-2" href="/">
                <i className="fa fa-twitter fa-2x" />
              </a>
              <a className="text-white p-2" href="/">
                <i className="fa fa-facebook fa-2x" />
              </a>
              <a className="text-white p-2" href="/">
                <i className="fa fa-linkedin fa-2x" />
              </a>
              <a className="text-white p-2" href="/">
                <i className="fa fa-instagram fa-2x" />
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
