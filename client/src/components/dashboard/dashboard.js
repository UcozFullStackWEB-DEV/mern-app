import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getCurrentProfile } from "../../actions/profile-actions";
import DashboardLinks from "./dashboard-links";
import Spinner from "../layout/Spinner";
import ExperienceBoard from "../Profile/experience-board";
import EducationBoard from "../Profile/education-board";

class Dashboard extends Component {
  componentDidMount() {
    if (!this.props.user.isAuthenticated) {
      this.props.history.push("/");
    }
    this.props.getCurrentProfile();
  }
  render() {
    const {
      profile: { profile, loading },
      user: { user }
    } = this.props;
    return (
      <div>
        {loading ? (
          <Spinner />
        ) : (
          <div>
            <h1 className="large text-primary ">Dashboard</h1>
            <p className="lead">
              <i className="fa fa-user" /> Welcome, {user && user.name}
            </p>
            <DashboardLinks profile={profile} />
            {profile && (
              <React.Fragment>
                <ExperienceBoard
                  experience={profile.experience ? profile.experience : null}
                />
                <EducationBoard
                  education={profile.education ? profile.education : null}
                />
              </React.Fragment>
            )}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    profile: state.profile,
    user: state.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCurrentProfile: () => dispatch(getCurrentProfile())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Dashboard));
