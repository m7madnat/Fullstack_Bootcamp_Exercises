import { useState, useRef } from 'react';
import FormReview from './FormReview';
import SurveyForm from './SurveyForm';

//? States:

//? Review toggle - Survey (parent)

//? Inputs and Select states - Form (son)

//? Inputs and Select states - Survey (parent)

//? buttons state - Review (son)

function Survey() {
  const [formValues, setFormValues] = useState({});
  const [isFormAlive, setIsFormAlive] = useState(true);
  const myRef = useRef(1);

  return (
    <div>
      <input ref={myRef} />
      <button
        onClick={({ target }) => {
          console.log(myRef.current);
          console.dir(target);
        }}
      >
        get ref
      </button>
      {/* {isFormAlive && <SurveyForm setIsFormAlive={setIsFormAlive} setFormValues={setFormValues} />}
      {!isFormAlive && <FormReview formValues={formValues} setIsFormAlive={setIsFormAlive} />} */}
    </div>
  );
}

export default Survey;
