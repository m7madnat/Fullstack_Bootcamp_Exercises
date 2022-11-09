import { useState } from 'react';

function SurveyForm({ setIsFormAlive, setFormValues }) {
  const [formData, setFormData] = useState({
    first: '',
    last: '',
    age: '',
    freeText: '',
  });

  const handleChange = ({ target }) => {
    const { value, name } = target;
    if (value === 'XXX' || value === 'xxx') {
      setFormData((prev) => {
        return { ...formData, [name]: 'Opsss' };
      });
    } else {
      setFormData((prev) => {
        return { ...formData, [name]: value };
      });
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setFormValues(formData);
    setIsFormAlive(false);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className='gap'>
        <label>First Name:</label>
        <input onChange={handleChange} value={formData.first} type='text' name='first' />
      </div>
      <div className='gap'>
        <label>Last Name:</label>
        <input value={formData.last} name='last' onChange={handleChange} type='text' />
      </div>
      <div className='gap'>
        <label>Age:</label>
        <select onChange={handleChange} name='age' value={formData.age}>
          <option value='0-15'>0-15</option>
          <option value='15-30'>0-30</option>
          <option value='30-45'>30-45</option>
          <option value='Over 40'>Over 40</option>
        </select>
      </div>
      <div style={{ textAlign: 'center' }}>
        <label>Free Text:</label>
        <textarea value={formData.freeText} onChange={handleChange} name='freeText' />
      </div>
      <div className='gap'>
        <input onChange={handleChange} type='submit' />
      </div>
    </form>
  );
}

export default SurveyForm;
