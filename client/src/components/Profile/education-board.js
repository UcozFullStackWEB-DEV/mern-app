import React from "react";
import { connect } from "react-redux";
import { removeEducation } from "../../actions/profile-actions";

function EducationBoard({ education, removeEducation }) {
  if (!education) return null;

  const educationList = list => {
    return list.map(listItem => {
      const { school, degree, from, to, _id } = listItem;

      return (
        <tr key={_id}>
          <td>{school}</td>
          <td>{degree}</td>
          <td>
            {from.slice(0, 10)} - {to ? to.slice(0, 10) : "now"}
          </td>
          <td>
            <button
              onClick={() => removeEducation(_id)}
              className="btn btn-danger"
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };
  return (
    <div>
      <h4 className="mb-2">Education Credentials</h4>
      <table className="table">
        <thead>
          <tr>
            <th>School</th>
            <th>Degree</th>
            <th>Years</th>
            <th />
          </tr>
        </thead>
        <tbody>{educationList(education)}</tbody>
      </table>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    removeEducation: id => dispatch(removeEducation(id))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(EducationBoard);
