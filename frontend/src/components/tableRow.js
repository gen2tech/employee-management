

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Svg from './svg';


class TableRow extends Component {

  render() {
    return (

          
      <tr className="table-row rounded-xlg">
      <td className="betacol" data-label="">
        <div className="form-check">
          <input type="checkbox" />
        </div>
      </td>
      <td className="betacol py-3" data-label="EMPLOYEE">
        <div className="d-flex align-items-center">
          <div className="pr-2">
            <img src={this.props.obj.avatar} className="rounded-circle shadow" alt="bell" />
          </div>
          <div className="d-flex flex-column">
            <label className="mb-0">{this.props.obj.first_name} {this.props.obj.last_name}</label>
            <label className="mb-0 small muted-text">{this.props.obj.position}</label>
          </div>
        </div>
      </td>
      <td className="betacol py-3" data-label="SALARY">
        <div className="d-flex flex-column">
          <label className="mb-0">{this.props.obj.salary} NOK</label>
          <label className="mb-0 small muted-text">{this.props.obj.contract}</label>
        </div>
      </td>
      <td className="betacol py-3" data-label="STATUS">
        <div className="d-flex flex-column">
          <label className="mb-0">test period</label>
          <label className="mb-0 small muted-text">{this.props.obj.probation}</label>
        </div>
      </td>
      <td className="betacol py-3" data-label="MANAGE">
        <div className="d-flex">
          <label className="mb-0 pr-3 border-right">
            <Link to={"/edit/"+this.props.obj.id}><Svg type="edit" /></Link>
          </label>
          <label className="mb-0 pl-3">
            <Link to="#" onClick={()=> this.props.deleteEmployee(this.props.rowKey)}><Svg type="delete" /></Link>
          </label>
        </div>
      </td>
    </tr>
    );
  }
}

export default TableRow;