import React, { Component } from "react";
import { reduxForm, Field } from 'redux-form';
import LabelInput from '../common/form/LabelInput'

class BillingCycleForm extends Component {

  render(){

    const { handleSubmit } = this.props;

    return (
      
      <form role='form' onSubmit={handleSubmit}>
        <div className="box-body">
          <Field name='name' component={LabelInput}
            label='Month Name' cols='12 4' 
            placeholder='Write the name of month'
          />
          <Field name='month' component={LabelInput}
            label='Month' cols='12 4' 
            placeholder='Write the number of month'
            type='number'
          />
          <Field name='year' component={LabelInput}
            label='Year' cols='12 4' 
            placeholder='Write this year'
          />
        </div>
        <div className="box-footer">
          <button type='submit' className="btn btn-primary">Submit</button>
        </div>
      </form>

    );
  }
}

export default reduxForm({
  form: 'billingCycleForm',
  destroyOnUnmount: false})(BillingCycleForm);