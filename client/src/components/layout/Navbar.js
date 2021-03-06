import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logOutUser } from "../../actions/auth-actions";
import { clearCurrentProfile } from "../../actions/profile-actions";
import "./Navbar.css";

class Navbar extends Component {
  onLogout = e => {
    const { clearCurrentProfile, logOutUser, history } = this.props;
    console.log(this.props);
    e.preventDefault();
    clearCurrentProfile();
    logOutUser(history);
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a
            className="logout-button nav-link"
            href="/"
            onClick={this.onLogout}
          >
            <img className="user-avatar" src={user.avatar} alt="" />
            logout
          </a>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to={"/register"}>
            Sign Up
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/login"}>
            Login
          </Link>
        </li>
      </ul>
    );

    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
        <div className="container">
          <Link className="navbar-brand" to={"/"}>
            DevConnector
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/profiles"}>
                  {" "}
                  Developers
                </Link>
              </li>
            </ul>
            {isAuthenticated ? authLinks : guestLinks}
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logOutUser: history => dispatch(logOutUser(history)),
    clearCurrentProfile: () => dispatch(clearCurrentProfile())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Navbar));
