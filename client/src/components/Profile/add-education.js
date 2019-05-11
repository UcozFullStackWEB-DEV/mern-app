import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addEducation } from "../../actions/profile-actions";
import FormGroup from "../common/form-group";

function AddEducation({ history, addEducation }) {
  const [FormData, setFormData] = useState({
    school: "",
    degree: "",
    fieldofstudy: "",
    from: "",
    to: "",
    current: false,
    descriptions: ""
  });

  const {
    school,
    degree,
    fieldofstudy,
    from,
    to,
    current,
    descriptions
  } = FormData;

  const onChange = e => {
    setFormData({
      ...FormData,
      [e.target.name]: e.target.value
    });
  };
  const onSubmit = e => {
    e.preventDefault();
    addEducation(FormData, history);
  };

  return (
    <div className="add-education">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <Link to="/dashboard" className="btn btn-light">
              Go Back
            </Link>
            <h1 className="display-4 text-center">Add Your Education</h1>
            <p className="lead text-center">
              Add any school, bootcamp, etc that you have attended
            </p>
            <small className="d-block pb-3">* = required field</small>
            <form onSubmit={onSubmit}>
              <FormGroup
                type="text"
                className="form-control form-control-lg"
                placeholder="* School Or Bootcamp"
                name="school"
                required
                onChange={onChange}
                value={school}
              />
              <FormGroup
                type="text"
                className="form-control form-control-lg"
                placeholder="* Degree Or Certificate"
                name="degree"
                required
                onChange={onChange}
                value={degree}
              />
              <FormGroup
                type="text"
                className="form-control form-control-lg"
                placeholder="Field Of Study"
                name="fieldofstudy"
                onChange={onChange}
                value={fieldofstudy}
              />
              <h6>From Date</h6>
              <FormGroup
                type="date"
                className="form-control form-control-lg"
                name="from"
                value={from}
                onChange={onChange}
              />
              <h6>To Date</h6>
              <FormGroup
                type="date"
                className="form-control form-control-lg"
                name="to"
                value={to}
                onChange={onChange}
              />

              <div className="form-check mb-4">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="current"
                  value={current}
                  onChange={onChange}
                />
                <label className="form-check-label" htmlFor="current">
                  Current Job
                </label>
              </div>
              <div className="form-group">
                <textarea
                  className="form-control form-control-lg"
                  placeholder="Program Description"
                  name="descriptions"
                  value={descriptions}
                  onChange={onChange}
                />
                <small className="form-text text-muted">
                  Tell us about your experience and what you learned
                </small>
              </div>
              <input type="submit" className="btn btn-info btn-block mt-4" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    errors: state.errors
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addEducation: (formData, history) =>
      dispatch(addEducation(formData, history))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AddEducation));
