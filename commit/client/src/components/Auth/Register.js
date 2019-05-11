import React, { Component } from "react";
import { connect } from "react-redux";
import { userRegister } from "../../actions/auth-actions";
import { withRouter } from "react-router-dom";
import FormGroup from "../common/form-group";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const { name, email, password, password2 } = this.state;
    let newUser = {
      name,
      email,
      password,
      password2
    };
    this.props.userRegister(newUser, this.props.history);
    // this.props.userRegister(newUser, this.props.history);
  };

  componentWillReceiveProps(nextProps) {
    const { errors } = nextProps;
    if (errors) {
      this.setState({ errors });
    }
  }

  render() {
    const { errors } = this.state;
    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Sign Up</h1>
              <p className="lead text-center">
                Create your DevConnector account
              </p>
              <form onSubmit={this.onSubmit}>
                <FormGroup
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={this.state.name}
                  onChange={this.onChange}
                  errors={errors.name}
                />
                <FormGroup
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={this.state.email}
                  onChange={this.onChange}
                  errors={errors.email}
                >
                  <small className="form-text text-muted">
                    This site uses Gravatar so if you want a profile image, use
                    a Gravatar email
                  </small>
                </FormGroup>

                <FormGroup
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.onChange}
                  errors={errors.password}
                />

                <FormGroup
                  type="password"
                  name="password2"
                  placeholder="Repeat Password"
                  value={this.state.password2}
                  onChange={this.onChange}
                  errors={errors.password2}
                />
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    errors: state.errors
  };
};

const mapDispatchToProps = dispatch => {
  return {
    userRegister: (userInfo, history) => {
      //dispatch ( dispatch => axios.post....)(dispatch)
      dispatch(userRegister(userInfo, history));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Register));
