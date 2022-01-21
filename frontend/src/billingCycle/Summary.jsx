import React from "react";
import Grid from '../common/Layout/Grid';
import Row from '../common/Layout/Row';
import ValueBox from "../common/widget/ValueBox";

// direct destructor in props

export default ({credit, debt}) => {

  return (

    <Grid cols='12'>
      <fieldset>
        <legend>Summary</legend>
      </fieldset>
      <Row>
        <ValueBox cols='12 4' color='green' icon='bank' value={`R$ ${credit}`} text='Credits total'/>
        <ValueBox cols='12 4' color='red' icon='credit-card' value={`R$ ${debt}`} text='Debts total' />
        <ValueBox cols='12 4' color='blue' icon='money' value={`R$ ${credit - debt}`} text='Your money total'/>
      </Row>
    </Grid>

  );

}