import React from "react";
import classnames from 'classnames'
function Questions({_id, category, question, response, show}) {
  return (
    <div className={classnames("tab-pane fade", {"show active": show})} id={category._id} role="tabpanel">
      <div className="accordion" id="accordionFaqTwo">
        <div className="accordion-item">
          <h5
            className="accordion-title"
            data-toggle="collapse"
            aria-expanded="true"
            data-target={`#accordion-${_id}`}
          >
            {question}
          </h5>
          <div
            id={`accordion-${_id}`}
            className="collapse show"
            data-parent="#accordionFaqTwo"
          >
            <div className="accordion-content">
              {response}
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Questions;
