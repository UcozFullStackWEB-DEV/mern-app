import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Loader from "../layout/Spinner";
import { connect } from "react-redux";
import UserPageHead from "./user-profile-page/user-head";
import UserBioSkills from "./user-profile-page/user-bio-skills";
import UserEducationExperience from "./user-profile-page/user-education-experience";

import {
  get_single_profile,
  clear_single_profile
} from "../../actions/profiles-actions";

const UserProfilePage = ({
  loading,
  match,
  profile,
  get_single_profile,
  clear_single_profile
}) => {
  useEffect(() => {
    get_single_profile(match.params.id);
  }, []);

  useEffect(() => {
    return function() {
      clear_single_profile();
    };
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <div className="profile">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-6">
                <Link
                  to={"/profiles"}
                  className="btn btn-light mb-3 float-left"
                >
                  Back To Profiles
                </Link>
              </div>
              <div className="col-6" />
            </div>

            <UserPageHead {...profile} />

            <UserBioSkills {...profile} />

            <UserEducationExperience {...profile} />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  const { loading, profile } = state.profiles.singleProfile;
  return {
    profile,
    loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    get_single_profile: id => dispatch(get_single_profile(id)),
    clear_single_profile: () => dispatch(clear_single_profile())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfilePage);
