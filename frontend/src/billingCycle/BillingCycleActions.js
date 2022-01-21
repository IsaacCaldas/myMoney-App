import axios from 'axios';
import { toastr } from 'react-redux-toastr';
import { reset as resetForm, initialize } from 'redux-form';
import { showTabs, selectTab } from '../common/tab/tabActions';
import BillingCycle from './BillingCycle';

const URL = 'http://localhost:3005/api';

export function getList(){

  const request = axios.get(`${URL}/billingCycles`);

  return {
    type: 'BILLING_CYCLES_FETCHED',
    payload: request
  }
}

export function create(values){

  return dispatch => {
    axios.post(`${URL}/billingCycles`, values).then(resp => {
      toastr.success('Success','Registration successful.');

      dispatch([
        resetForm('billingCycleForm'),
        getList(),
        selectTab('tabList'),
        showTabs('tabList', 'tabCreate')
      ]);

    }).catch(e => {
      e.response.data.errors.forEach(error => toastr.error('Error', error));
    });

    return {
      type: 'BILLING_CYCLES_CREATED',
    }
  }
}

export function showUpdate(billingCycle){
  return [
    showTabs('tabUpdate'),
    selectTab('tabUpdate'),
    initialize('billingCycleForm', billingCycle)
  ]
}