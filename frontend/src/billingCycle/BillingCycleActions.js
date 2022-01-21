import axios from 'axios';
import { toastr } from 'react-redux-toastr';

const URL = 'http://localhost:3005/api';

export function getList(){

  const request = axios.get(`${URL}/billingCycles`);

  return {
    type: 'BILLING_CYCLES_FETCHED',
    payload: request
  }
}

export function create(values){

  axios.post(`${URL}/billingCycles`, values).then(resp => {
      toastr.success('Success','Registration successful.');

    }).catch(e => {
      e.response.data.errors.forEach(error => toastr.error('Error', error));
    });

  return {
    type: 'BILLING_CYCLES_CREATED',
  }
}