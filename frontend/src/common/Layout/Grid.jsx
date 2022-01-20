import React, { Component } from "react";

export default class Grid extends Component {

  toCssClass(numbers){

    const cols = numbers ? numbers.split(' ') : [];
    let bootClass = '';
    
    if(cols[0]) bootClass += `col-xs-${cols[0]}`;
    if(cols[1]) bootClass += ` col-sm-${cols[1]}`;
    if(cols[2]) bootClass += ` col-md-${cols[2]}`;
    if(cols[3]) bootClass += ` col-lg-${cols[3]}`;

    return bootClass;
  }

  render(){
    
    const gridClass = this.toCssClass(this.props.cols || '12');

    return (

      <div className={gridClass}>
        {this.props.children}
      </div>

    );

  }

}