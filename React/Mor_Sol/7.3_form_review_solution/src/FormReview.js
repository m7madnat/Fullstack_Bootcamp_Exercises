import React from 'react';

function FormReview({ setIsFormAlive, formValues }) {
  const insertFormData = () => {
    const res = [];
    // console.log(Object.entries(formValues));
    for (let key in formValues) {
      res.push(
        <p key={key + formValues[key]}>
          {key}: {formValues[key]}
        </p>
      );
    }
    return res;
  };
  return (
    <div>
      {insertFormData()}
      <button onClick={() => setIsFormAlive(true)}>Back</button>
      <button>Send Survey</button>
    </div>
  );
}

export default FormReview;
