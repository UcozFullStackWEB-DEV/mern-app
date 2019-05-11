import React from "react";
import { Link } from "react-router-dom";
import "./dashboard-links.css";

export default function dashboardLinks({ profile }) {
  return profile ? (
    <React.Fragment>
      <div className="btn-group mb-4 " role="group">
        <Link to={"/edit-profile"} className="btn btn-light mr-3">
          <i className="fa fa-user-circle text-info mr-1" />
          Edit Profile
        </Link>
        <Link to={"/add-expirience"} className="btn btn-light mr-3">
          <i className="fa fa-black-tie text-info mr-1" />
          Add Experience
        </Link>
        <Link to={"/add-education"} className="btn btn-light">
          <i className="fa fa-graduation-cap text-info mr-1" />
          Add Education
        </Link>
      </div>
    </React.Fragment>
  ) : (
    <React.Fragment>
      <p>You dont have a profile ,please setup it!</p>
      <Link to="/create-profile" className="btn btn-primary">
        Setup Profile
      </Link>
    </React.Fragment>
  );
}
