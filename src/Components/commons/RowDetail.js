import React from "react";
import { useDispatch } from "react-redux";
import { DeleteCategories } from "../../Redux/actions/CategoriesAction";

const RowDetail = ({id, name, setAlertShow, setAlertMessage}) => {
    const dispatch = useDispatch()
    const onDelete = (id)=>{
      dispatch(DeleteCategories(id, setAlertShow, setAlertMessage))
    }
  return (
    <tr>
      <td>{name}</td>
      <td>
          <div style={{ display: "flex", gap: "3px"}}>
              <button className="btn btn-outline-danger btn-sm" onClick={()=>onDelete(id)}>Delete</button>
          </div>
      </td>
    </tr>
  );
};

export default RowDetail;
