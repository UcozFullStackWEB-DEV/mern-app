import React from "react";
import { Link } from "react-router-dom";

const UserProfileCart = props => {
  const {
    handle,
    skills,
    status,
    location,
    user: { _id: userId }
  } = props.profile;

  const renderSkills = skills => {
    return skills.map((skill, i) => (
      <li key={i} className="list-group-item">
        <i className="fa fa-check pr-1" />
        {skill}
      </li>
    ));
  };

  return (
    <div className="card card-body bg-light mb-3">
      <div className="row">
        <div className="col-2">
          <img
            className="rounded-circle"
            src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
            alt=""
          />
        </div>
        <div className="col-lg-6 col-md-4 col-8">
          <h3>{handle}</h3>
          <p>{status}</p>
          <p>{location}</p>
          <Link to={`/profiles/${userId}`} className="btn btn-info">
            View Profile
          </Link>
        </div>
        <div className="col-md-4 d-none d-lg-block">
          <h4>Skill Set</h4>
          <ul className="list-group">{renderSkills(skills)}</ul>
        </div>
      </div>
    </div>
  );
};

export default UserProfileCart;
