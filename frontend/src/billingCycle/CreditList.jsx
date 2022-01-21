import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Grid from "../common/Layout/Grid";
import { Field } from 'redux-form';
import Input from '../common/form/Input';

class CreditList extends Component {

  renderRows(){

    const list = this.props.list || [];
    
    return list.map((item, index) => (

      <tr key={index}>
        <td><Field name={`credits[${index}].name`} component={Input}
          placeholder='Report the name' readOnly={this.props.readOnly}
        /></td>
        <td><Field name={`credits[${index}].value`} component={Input}
          placeholder='Report the value' readOnly={this.props.readOnly}/></td>
        <td></td>
      </tr>
    ));
  }

  render(){

    return(

      <Grid cols={this.props.cols}>
        <fieldset>
          <legend>Credits</legend>

          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Value</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.renderRows()}
            </tbody>
          </table>

        </fieldset>
      </Grid>

    );

  }

}
/*
const mapStateToProps = state => ({

});
const mapDispatchToProps = dispatch => bindActionCreators({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps)(CreditList);*/

export default CreditList;