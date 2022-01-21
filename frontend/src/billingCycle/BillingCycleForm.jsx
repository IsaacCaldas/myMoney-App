import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import { reduxForm, Field, formValueSelector } from 'redux-form';
import { init } from "./BillingCycleActions";

import LabelInput from '../common/form/LabelInput'
import ItemList from "./ItemList";

class BillingCycleForm extends Component {

  render(){

    const { handleSubmit, readOnly, credits, debts } = this.props;

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
          <ItemList cols='12 6' list={credits} readOnly={readOnly}
          field='credits' legend='Credits'/>
          <ItemList cols='12 6' list={debts} readOnly={readOnly}
          field='debts' legend='Debts' showStatus/>
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
  credits: selector(state, 'credits'),
  debts: selector(state, 'debts')
});

const mapDispatchToProps = dispatch => bindActionCreators({
  init
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps)(BillingCycleForm);