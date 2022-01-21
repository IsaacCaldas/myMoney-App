import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import { reduxForm, Field, formValueSelector } from 'redux-form';
import { init } from "./BillingCycleActions";

import LabelInput from '../common/form/LabelInput'
import CreditList from "./CreditList";

class BillingCycleForm extends Component {

  render(){

    const { handleSubmit, readOnly, credits } = this.props;

    return (
      
      <form role='form' onSubmit={handleSubmit}>
        <div className="box-body">
          <Field name='name' component={LabelInput} readOnly={readOnly}
            label='Month Name' cols='12 4' 
            placeholder='Write the name of month'
          />
          <Field name='month' component={LabelInput} readOnly={readOnly}
            label='Month' cols='12 4' 
            placeholder='Write the number of month'
            type='number'
          />
          <Field name='year' component={LabelInput} readOnly={readOnly}
            label='Year' cols='12 4' 
            placeholder='Write this year'
          />
          <CreditList cols='12 6' list={credits} readOnly={readOnly}/>
        </div>
        <div className="box-footer">
          <button type='submit' className={`btn btn-${this.props.btnColor}`}>{this.props.btnName}</button>
          <button type='button' className="btn btn-default" onClick={this.props.init}>Cancel</button>
        </div>
      </form>

    );
  }
}

BillingCycleForm = reduxForm({form: 'billingCycleForm', destroyOnUnmount: false})(BillingCycleForm);

const selector = formValueSelector('billingCycleForm');

const mapStateToProps = state => ({
  credits: selector(state, 'credits')
});

const mapDispatchToProps = dispatch => bindActionCreators({
  init
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps)(BillingCycleForm);