import React from "react";

export default function UserBioSkills({ handle, bio, skills }) {
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="card card-body bg-light mb-3">
          <h3 className="text-center text-info">{handle} Bio</h3>
          <p className="lead">{bio ? bio : "There is no bio"}</p>
          <hr />
          <h3 className="text-center text-info">Skill Set</h3>
          <div className="row">
            <div className="d-flex flex-wrap justify-content-center align-items-center">
              {skills.map((skill, i) => (
                <div key={i} className="p-3">
                  <i className="fa fa-check" /> {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
