import React from "react";

export default function UserEducationExperience({ education, experience }) {
  const renderEducation = education => {
    return education.map(education => {
      const {
        fieldofstudy,
        from,
        to,
        current = "current",
        degree,
        school,
        descriptions,
        _id
      } = education;
      return (
        <div key={_id} className="col-md-6">
          <h3 className="text-center text-info">Education</h3>
          <ul className="list-group">
            <li className="list-group-item">
              <h4>{school}</h4>
              <p>
                {from} - {to || current}
              </p>
              <p>
                <strong>Degree: </strong>
                {degree}
              </p>
              <p>
                <strong>Field Of Study: </strong>
                {fieldofstudy}
              </p>
              <p>
                <strong>Description:</strong> {descriptions}
              </p>
            </li>
          </ul>
        </div>
      );
    });
  };

  const renderExperience = experience => {
    return experience.map(experience => {
      const {
        from,
        to,
        current = "current",
        title,
        location = "There is no location",
        company,
        descriptions,
        _id
      } = experience;
      return (
        <li key={_id} className="list-group-item">
          <h4>{company}</h4>
          <p>
            {from} to {to || current}
          </p>
          <p>
            <strong>Position:</strong> {title}
          </p>
          <p>
            <strong>Location: </strong> {location}
            <strong>Description:</strong> {descriptions}
          </p>
        </li>
      );
    });
  };

  return (
    <div className="row">
      {renderEducation(education)}
      <div className="col-md-6">
        <h3 className="text-center text-info">Experience</h3>
        <ul className="list-group">{renderExperience(experience)}</ul>
      </div>
    </div>
  );
}
