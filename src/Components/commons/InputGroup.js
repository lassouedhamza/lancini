import React from "react";
import classnames from 'classnames'
const InputGroup = ({
  label,
  name,
  value,
  type,
  placeholder,
  onChangeHandler,
  errors,
}) => {
  return (
    <div class="form-group">
      <label>{label}</label>
      <input type={type} value={value} class={classnames("form-control", {"is-invalid": errors})} placeholder={placeholder} name={name} onChange={onChangeHandler}/>
      {
          errors && (<span className="invalid-feedback">{errors}</span>)
      }
    </div>
  );
};

export default InputGroup;
