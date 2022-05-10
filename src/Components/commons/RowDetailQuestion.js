import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { DeleteQuestions } from "../../Redux/actions/QuestionsAction";

const RowDetailQuestion = ({id, category, question, response}) => {
    const dispatch = useDispatch()
    const onDelete = (id)=>{
      dispatch(DeleteQuestions(id))
    }
  return (
    <tr>
      <td>{category.name}</td>
      <td>{question}</td>
      <td>{response}</td>
      <td>
          <div style={{ display: "flex", gap: "3px"}}>
              <Link className="btn btn-outline-info btn-sm" to={`/Questions/${id}`}>Edit</Link>
              {" "}
              <button className="btn btn-outline-danger btn-sm" onClick={()=>onDelete(id)}>Delete</button>
          </div>
      </td>
    </tr>
  );
};

export default RowDetailQuestion;
