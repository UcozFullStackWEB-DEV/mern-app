import React from "react";
import { connect } from "react-redux";
import { removeExperience } from "../../actions/profile-actions";

function ExperienceBoard({ experience, removeExpirience }) {
  if (!experience) return null;

  const experienceList = list => {
    return list.map(listItem => {
      const { company, title, from, to, _id } = listItem;

      return (
        <tr key={_id}>
          <td>{company}</td>
          <td>{title}</td>
          <td>
            {from.slice(0, 10)} - {to ? to.slice(0, 10) : "now"}
          </td>
          <td>
            <button
              onClick={() => removeExpirience(_id)}
              className="btn btn-danger"
            >
              Delete {}
            </button>
          </td>
        </tr>
      );
    });
  };
  return (
    <div>
      <h4 className="mb-2">Experience Credentials</h4>
      <table className="table">
        <thead>
          <tr>
            <th>Company</th>
            <th>Title</th>
            <th>Years</th>
            <th />
          </tr>
        </thead>
        <tbody>{experienceList(experience)}</tbody>
      </table>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    removeExpirience: id => dispatch(removeExperience(id))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ExperienceBoard);
