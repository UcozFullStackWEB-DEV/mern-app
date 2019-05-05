import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { getCurrentProfile } from "../../actions/profile-actions";
import DashboardLinks from "./dashboard-links";
import Spinner from "../layout/Spinner";

class Dashboard extends Component {
  componentDidMount() {
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
            {profile !== null ? (
              <React.Fragment>
                <DashboardLinks />
              </React.Fragment>
            ) : (
              <React.Fragment>
                <p>You dont have a profile ,please setup it!</p>
                <Link to="/create-profile" className="btn btn-primary">
                  Setup Profile
                </Link>
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

export default connect(
  mapStateToProps,
  { getCurrentProfile }
)(withRouter(Dashboard));
