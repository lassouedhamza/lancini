import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AddCategory, GetCategories } from "../../../Redux/actions/CategoriesAction";
import { FindSingleQuestion, UpdateQuestions } from "../../../Redux/actions/QuestionsAction";
import InputGroup from "../../commons/InputGroup";
import SelectGroup from "../../commons/SelectGroup";
import Header from "../Header/Header";

import LeftSide from "../LeftSide/LeftSide";

function QuestionDetail(props) {
  const [form, setForm] = useState({})
  const categories = useSelector(state =>state.categories)
  const questions = useSelector(state =>state.questions)
  const errors = useSelector(state =>state.errors)
  const {id} = useParams()
  const dispatch = useDispatch()
  useEffect(async ()=>{
   await dispatch(GetCategories())
   await dispatch(FindSingleQuestion(id, setForm))
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
  dispatch(UpdateQuestions(id, form, props.history))
  }
  return (
    <div>
    <Header></Header>
     
      <section className="faq-section section-gap">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <form onSubmit={onSubmitHandler}>
                <SelectGroup value={form.category} data={categories.all} title="Categories"  name="category" onChangeHandler={onChangeHanlder} errors={errors.category}/>
                <InputGroup  label="Question" name="question" value={form.question} type="text" placeholder="question" onChangeHandler={onChangeHanlder} errors={errors.question}/>
                <InputGroup label="Response" name="response" value={form.response}  type="text" placeholder="response" onChangeHandler={onChangeHanlder} errors={errors.response}/>
                <button type="submit" class="btn btn-outline-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default QuestionDetail;
