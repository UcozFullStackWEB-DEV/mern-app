import React from "react";
import { connect } from "react-redux";

const withErrors = Component => {
  return class extends React.Component {
    state = {
      errors: null
    };
    componentWillReceiveProps(nextProps) {
      if (nextProps.errors) {
        this.setState({
          errors: nextProps.errors
        });
      }
    }
    render() {
      return <Component errorsField={this.state.errors} {...this.props} />;
    }
  };
};

export default withErrors;
