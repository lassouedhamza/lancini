import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddQuestion, FindAllQuestion } from "../../../Redux/actions/QuestionsAction";
import RowDetailQuestion from "../../commons/RowDetailQuestion";

import InputGroup from "../../commons/InputGroup";
import { GetCategories } from "../../../Redux/actions/CategoriesAction";
import SelectGroup from "../../commons/SelectGroup";
import Alert from "../../commons/Alert";
import Header from "../Header/Header";

import LeftSide from "../LeftSide/LeftSide";

function Questions() {
  const [form, setForm] = useState({})
  const questions = useSelector(state =>state.questions)
  const categories = useSelector(state =>state.categories)
  const errors = useSelector(state =>state.errors)

  const [alertShow, setAlertShow] = useState(false)
  const [alertMessage, setAlertMessage] = useState("")


  const dispatch = useDispatch()
  useEffect(async ()=>{
   await dispatch(FindAllQuestion())
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
  dispatch(AddQuestion(form, setAlertShow, setAlertMessage))
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
                <SelectGroup data={categories.all} title="Categories"  name="category" onChangeHandler={onChangeHanlder} errors={errors.category}/>
                <InputGroup label="Question" name="question" type="text" placeholder="question" onChangeHandler={onChangeHanlder} errors={errors.question}/>
                <InputGroup label="Response" name="response" type="text" placeholder="response" onChangeHandler={onChangeHanlder} errors={errors.response}/>
                <button type="submit" class="btn btn-outline-primary">
                  Submit
                </button>
              </form>
            </div>
            <div className="col-md-7">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Category</th>
                    <th scope="col">Question</th>
                    <th scope="col">Response</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    questions && questions.all && questions.all.map(({_id, category, question, response})=>(
                       <RowDetailQuestion id={_id} category={category} question={question} response={response}/>
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

export default Questions;
