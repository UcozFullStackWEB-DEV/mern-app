import React, { Component } from "react";

export default class FormGroup extends Component {
  render() {
    const {
      name,
      required,
      type,
      placeholder,
      value,
      onChange,
      errors,
      children
    } = this.props;
    return (
      <div className="form-group">
        <input
          type={type}
          className={
            errors
              ? "form-control form-control-lg is-invalid"
              : "form-control form-control-lg "
          }
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
        />
        {children}
        {errors && <span className="invalid-feedback">{errors}</span>}
      </div>
    );
  }
}
