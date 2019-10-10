import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../state/actionCreators';

export function Form({ formValues, changeInput }) {
  const onValueChange = event => {
    changeInput(event.target);
  };

  const onFormSubmit = event => {
    event.preventDefault();
    alert(`submitting ${formValues.lname}, ${formValues.fname}`);
  };

  return (
    <form className='component' onSubmit={onFormSubmit}>
      <label>first name
        <input value={formValues.fname} onChange={onValueChange} name='fname' />
      </label><br />

      <label>last name
        <input value={formValues.lname} onChange={onValueChange} name='lname' />
      </label><br />

      <input type='submit' />
    </form>
  );
}

export default connect(
  state => state,
  actionCreators,
)(Form);
