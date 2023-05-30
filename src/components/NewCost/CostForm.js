import { useState } from 'react';

import './CostForm.css';


const CostForm = (props) => {

  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const nameChangeHandler = (event) => {
    setName(event.target.value)
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value)
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value)
  };


  const submitHandler = (event) => {
    event.preventDefault();

    const costData = {
      name,
      amount,
      date: new Date(date),
    };


    props.onSaveCostData(costData);
    setName('');
    setAmount('');
    setDate('');
  }


  return (
    <form onSubmit={submitHandler}>
      <div className='new-cost__controls'>
        <div className='new-cost__control'>
          <label>Наименование</label>
          <input type='text' value={name} onChange={nameChangeHandler}/>
        </div>
        <div className='new-cost__control'>
          <label>Стоимость</label>
          <input type='number' onChange={amountChangeHandler} value={amount} min='0.01' step='0.01'/>
        </div>
        <div className='new-cost__control'>
          <label>Дата</label>
          <input type='date' min='2019-01-01' step='2023-12-31'/>
        </div>
        <div className='new-cost__actions'>
          <button type='submit' value={date} onChange={dateChangeHandler}>Добавить расход</button>
        </div>
      </div>
    </form>
  )
};


export default CostForm;