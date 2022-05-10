import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddCategory, GetCategories } from "../../../Redux/actions/CategoriesAction";
import Alert from "../../commons/Alert";
import InputGroup from "../../commons/InputGroup";
import RowDetail from "../../commons/RowDetail";
import Header from "../Header/Header";

import LeftSide from "../LeftSide/LeftSide";

function Category() {
  const [form, setForm] = useState({})
  const categories = useSelector(state =>state.categories)
  const errors = useSelector(state =>state.errors)
  
  const [alertShow, setAlertShow] = useState(false)
  const [alertMessage, setAlertMessage] = useState("")

  const dispatch = useDispatch()
  useEffect(async ()=>{
   await dispatch(GetCategories())
  },[])

  /* add category */
  const onChangeHanlder = (e)=>{
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const onSubmitHandler = (e)=>{
  e.preventDefault()
  dispatch(AddCategory(form, setAlertShow, setAlertMessage))
  }
  return (
    <div>
      

    <Header></Header>
   
      <section className="faq-section section-gap">
        <div className="container">
        {
          alertShow  ? (
            <Alert type="success" message={alertMessage} alertShow={alertShow}/>
          ): ("")
        }
          <div className="row">
            <div className="col-md-5">
              <form onSubmit={onSubmitHandler}>
                <InputGroup label="Category name" name="name" type="text" placeholder="name of category" onChangeHandler={onChangeHanlder} errors={errors.name}/>
                <button type="submit" class="btn btn-outline-primary">
                  Submit
                </button>
              </form>
            </div>
            <div className="col-md-7">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    categories && categories.all && categories.all.map(({_id, name})=>(
                       <RowDetail id={_id} name={name}/>
                    ))
                  }
                 
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Category;
