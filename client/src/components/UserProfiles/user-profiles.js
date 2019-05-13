import React, { useEffect } from "react";
import { connect } from "react-redux";
import { get_profiles } from "../../actions/profiles-actions";
import UserProfileCart from "./user-profile-cart";
import Loader from "../layout/Spinner";

const UserProfiles = ({ loading, profiles, get_profiles }) => {
  const renderProfiles = profiles => {
    return profiles.map(profile => (
      <UserProfileCart key={profile._id} profile={profile} />
    ));
  };

  useEffect(() => {
    get_profiles();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="profiles">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="display-4 text-center">Developer Profiles</h1>
            <p className="lead text-center">
              Browse and connect with developers
            </p>
            {renderProfiles(profiles)}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  const { profiles } = state;
  return {
    loading: profiles.loading,
    profiles: profiles.profiles,
    singleProfile: profiles.singleProfile
  };
};

const mapDispatchToProps = dispatch => {
  return {
    get_profiles: () => dispatch(get_profiles())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfiles);
