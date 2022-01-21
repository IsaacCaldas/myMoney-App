import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Grid from "../common/Layout/Grid";
import { Field } from 'redux-form';
import Input from '../common/form/Input';

class CreditList extends Component {

  renderRows(){
    return (
      <tr>
        <td><Field name='credits[0].name' component={Input}
          placeholder='Report the name' readOnly={this.props.readOnly}
        /></td>
        <td><Field name='credits[0].value' component={Input}
          placeholder='Report the value' readOnly={this.props.readOnly}/></td>
        <td></td>
      </tr>
    );
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