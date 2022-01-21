import axios from 'axios';
import { toastr } from 'react-redux-toastr';
import { reset as resetForm, initialize } from 'redux-form';
import { showTabs, selectTab } from '../common/tab/tabActions';

const URL = 'http://localhost:3005/api';
const INITIAL_VALUES = {
  credits: [{}],
  debts: [{}]
};

export function getList(){

  const request = axios.get(`${URL}/billingCycles`);

  return {
    type: 'BILLING_CYCLES_FETCHED',
    payload: request
  }
}

export function create(values){
  return submit(values, 'post');
}
export function update(values){
  return submit(values, 'put');
}
export function remove(values){
  return submit(values, 'delete');
}

function submit(values, method){

  return dispatch => {
    
    const id = values._id ? values._id : '';

    axios[method](`${URL}/billingCycles/${id}`, values).then(resp => {
      toastr.success('Success','Operation successful.');

      dispatch(init());

    }).catch(e => {
      e.response.data.errors.forEach(error => toastr.error('Error', error));
    });

    return {
      type: 'BILLING_CYCLES_CREATED',
    }
  }
}

// LATER: refatorin showUpdate & showDelete to one function

export function showUpdate(billingCycle){
  return [
    showTabs('tabUpdate'),
    selectTab('tabUpdate'),
    initialize('billingCycleForm', billingCycle)
  ]
}
export function showRemove(billingCycle){
  return [
    showTabs('tabDelete'),
    selectTab('tabDelete'),
    initialize('billingCycleForm', billingCycle)
  ]
}

export function init(){
  return [
    showTabs('tabList', 'tabCreate'),
    selectTab('tabList'),
    getList(),
    initialize('billingCycleForm', INITIAL_VALUES)
  ]
}