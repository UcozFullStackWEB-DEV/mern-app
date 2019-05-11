import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addExpirience } from "../../actions/profile-actions";
import FormGroup from "../common/form-group";

const AddExperience = ({ errors, history, addExpirience }) => {
  const [FormData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    from: "",
    to: "",
    current: false,
    descriptions: ""
  });

  const {
    title,
    company,
    location,
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
    addExpirience(FormData, history);
  };

  useEffect(() => {}, []);

  return (
    <div className="section add-experience">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <Link to="/dashboard" className="btn btn-light">
              Go Back
            </Link>
            <h1 className="display-4 text-center">Add Your Experience</h1>
            <p className="lead text-center">
              Add any developer/programming positions that you have had in the
              past
            </p>
            <small className="d-block pb-3">* = required field</small>
            <form onSubmit={onSubmit}>
              <FormGroup
                type="text"
                className="form-control form-control-lg"
                placeholder="* Job Title"
                name="title"
                required
                onChange={onChange}
                errors={errors.title}
                value={title}
              />
              <FormGroup
                type="text"
                className="form-control form-control-lg"
                placeholder="* Company"
                name="company"
                required
                onChange={onChange}
                errors={errors.company}
                value={company}
              />
              <FormGroup
                type="text"
                className="form-control form-control-lg"
                placeholder="Location"
                name="location"
                onChange={onChange}
                errors={errors.location}
                value={location}
              />
              <h6>From Date</h6>
              <FormGroup
                type="date"
                className="form-control form-control-lg"
                name="from"
                onChange={onChange}
                errors={errors.from}
                value={from}
              />
              <h6>To Date</h6>
              <FormGroup
                type="date"
                className="form-control form-control-lg"
                name="to"
                onChange={onChange}
                value={to}
              />
              <div className="form-check mb-4">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="current"
                  id="current"
                  onChange={onChange}
                  value={current}
                />
                <label className="form-check-label" htmlFor="current">
                  Current Job
                </label>
              </div>
              <div className="form-group">
                <textarea
                  className="form-control form-control-lg"
                  placeholder="Job Description"
                  name="descriptions"
                  onChange={onChange}
                  value={descriptions}
                />
                <small className="form-text text-muted">
                  Some of your responsabilities, etc
                </small>
              </div>
              <input type="submit" className="btn btn-info btn-block mt-4" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    errors: state.errors
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addExpirience: (FormData, history) =>
      dispatch(addExpirience(FormData, history))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AddExperience));
