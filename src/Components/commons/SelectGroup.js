import React from "react";
import classnames from 'classnames'
const SelectGroup = ({value, data, title, name, onChangeHandler, errors}) => {
  return (
    <div class="form-group">
       <label>{name}</label>
        <select className={classnames("form-select form-select-lg mb-3", {"is-invalid": errors})} aria-label="Default select example" onChange={onChangeHandler} name={name}>
        {
            data && data.map(({_id, name})=>(
                _id === value ? <option value={_id} selected>{name}</option> :  <option value={_id}>{name}</option>
            ))
        }
        </select>
            {
                errors && (<span className="invalid-feedback">{errors}</span>)
            }
   </div>
  );
};

export default SelectGroup;
