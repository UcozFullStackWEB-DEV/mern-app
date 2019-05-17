import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import {
  createUserProfile,
  getCurrentProfile
} from "../../actions/profile-actions";
import Loading from "../layout/Spinner";
import FormGroup from "../common/form-group";

const EditProfile = ({
  createUserProfile,
  history,
  errors,
  profile: { loading, profile },
  getCurrentProfile
}) => {
  const [formData, setFormData] = useState({
    company: "",
    website: "",
    location: "",
    skills: "",
    status: "",
    githubusername: "",
    bio: "",
    twitter: "",
    facebook: "",
    linkedin: "",
    youtube: "",
    instagram: ""
  });

  const [socialInputs, toggleSocialInputs] = useState(false);

  useEffect(() => {
    getCurrentProfile();
    setFormData({
      ...formData,
      skills: loading || !profile.skills ? "" : profile.skills.join(" "),
      company: loading || !profile.company ? "" : profile.company,
      website: loading || !profile.website ? "" : profile.website,
      location: loading || !profile.location ? "" : profile.location,
      status: loading || !profile.status ? "" : profile.status,
      githubusername:
        loading || !profile.githubusername ? "" : profile.githubusername,
      bio: loading || !profile.bio ? "" : profile.bio,
      twitter: loading || !profile.twitter ? "" : profile.twitter,
      facebook: loading || !profile.facebook ? "" : profile.facebook,
      linkedin: loading || !profile.linkedin ? "" : profile.linkedin,
      youtube: loading || !profile.youtube ? "" : profile.youtube,
      instagram: loading || !profile.instagram ? "" : profile.instagram
    });
  }, []);

  const onChange = e => {
    //object spread + computed fields
    console.log(`${e.target.name} : ${e.target.value}`);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    createUserProfile(formData, history);
  };

  const {
    company,
    website,
    location,
    skills,
    status,
    githubusername,
    bio,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram
  } = formData;

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="create-profile">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <Link to="/dashboard" className="btn btn-light">
              Go Back
            </Link>
            <h1 className="display-4 text-center">Create Your Profile</h1>
            <p className="lead text-center">
              Let's get some information to make your profile stand out
            </p>
            <small className="d-block pb-3">* = required field</small>
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <select
                  className="form-control form-control-lg"
                  name="status"
                  onChange={onChange}
                  value={status}
                >
                  <option value="0">* Select Professional Status</option>
                  <option value="Developer">Developer</option>
                  <option value="Junior Developer">Junior Developer</option>
                  <option value="Senior Developer">Senior Developer</option>
                  <option value="Manager">Manager</option>
                  <option value="Student or Learning">
                    Student or Learning
                  </option>
                  <option value="Instructor">Instructor or Teacher</option>
                  <option value="Intern">Intern</option>
                  <option value="Other">Other</option>
                </select>
                <small className="form-text text-muted">
                  Give us an idea of where you are at in your career
                </small>
                {errors ? <span className="invalid-feedback" /> : null}
              </div>

              <FormGroup
                type="text"
                className="form-control form-control-lg"
                placeholder="Company"
                name="company"
                onChange={onChange}
                value={company}
                errors={errors.company}
              >
                <small className="form-text text-muted">
                  Could be your own company or one you work for
                </small>
              </FormGroup>

              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Website"
                  name="website"
                  onChange={onChange}
                  value={website}
                />
                <small className="form-text text-muted">
                  Could be your own or a company website
                </small>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Location"
                  name="location"
                  onChange={onChange}
                  value={location}
                />
                <small className="form-text text-muted">
                  City & state suggested (eg. Boston, MA)
                </small>
              </div>

              <FormGroup
                type="text"
                className="form-control form-control-lg"
                placeholder="Skills"
                name="skills"
                onChange={onChange}
                value={skills}
                errors={errors.skills}
              >
                <small className="form-text text-muted">
                  Please use comma separated values (eg.
                  HTML,CSS,JavaScript,PHP)
                </small>
              </FormGroup>

              <FormGroup
                type="text"
                className="form-control form-control-lg"
                placeholder="Github Username"
                name="githubusername"
                onChange={onChange}
                value={githubusername}
              >
                <small className="form-text text-muted">
                  If you want your latest repos and a Github link, include your
                  username
                </small>
              </FormGroup>

              <div className="form-group">
                <textarea
                  className="form-control form-control-lg"
                  placeholder="A short bio of yourself"
                  name="bio"
                  onChange={onChange}
                  value={bio}
                />
                <small className="form-text text-muted">
                  Tell us a little about yourself
                </small>
              </div>
              <div className="mb-3">
                <button
                  type="button"
                  className="btn btn-light"
                  onClick={() => toggleSocialInputs(!socialInputs)}
                >
                  Add Social Network Links
                </button>
                <span className="text-muted">Optional</span>
              </div>
              {socialInputs && (
                <React.Fragment>
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fa fa-twitter" />
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Twitter Profile URL"
                      name="twitter"
                      onChange={onChange}
                      value={twitter}
                    />
                  </div>

                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fa fa-facebook" />
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Facebook Page URL"
                      name="facebook"
                      onChange={onChange}
                      value={facebook}
                    />
                  </div>

                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fa fa-linkedin" />
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Linkedin Profile URL"
                      name="linkedin"
                      onChange={onChange}
                      value={linkedin}
                    />
                  </div>

                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fa fa-youtube" />
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="YouTube Channel URL"
                      name="youtube"
                      onChange={onChange}
                      value={youtube}
                    />
                  </div>

                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fa fa-instagram" />
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Instagram Page URL"
                      name="instagram"
                      onChange={onChange}
                      value={instagram}
                    />
                  </div>
                </React.Fragment>
              )}
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
    errors: state.errors,
    profile: state.profile
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createUserProfile: (formData, history) =>
      dispatch(createUserProfile(formData, history)),
    getCurrentProfile: () => dispatch(getCurrentProfile())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(EditProfile));
