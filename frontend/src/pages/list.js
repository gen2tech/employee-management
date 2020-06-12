
import React, { Component } from 'react';
import axios from 'axios';
import TableRow from '../components/tableRow';
import SideBar from '../components/sideBar';

import {CONFIG} from '../constants';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';



export default class List extends Component {

  constructor(props) {
      super(props);
      this.state = {employees: []};
    }
    componentDidMount = () =>{
        axios({
            method: 'get',
            url: CONFIG.APP_ENDPOINT + "list_employees",
            }).then((res)=>{
                console.log(res);
                if(res.data.key===1){ 
                    this.setState({ employees: res.data.txt });
                }
            }).catch(function (error) {
                console.log(error);
            })
    }
    tabRow = () =>{
      if(this.state.employees.length >0){
        return this.state.employees.map(function(object, i){
            return <TableRow obj={object} key={i} rowKey={i}  deleteEmployee={this.delete}/>;
        }, this);
      }else{
        return (<tr>
          <td colSpan='5'>There are currently no emplyee, Click on 'add employee' to add an employee in to the system</td>
        </tr>)
      }
    }

    delete = (rowKey) =>{
      swal({
        title: "Are you sure?",
        text: "Are you sure that you want to leave this page?",
        icon: "warning",
        dangerMode: true,
      }).then(willDelete => {
        if (willDelete) {
          const employees = this.state.employees;
          const employee = employees[rowKey];
          axios({
            method: 'delete',
            url: CONFIG.APP_ENDPOINT + "delete_employee/"+employee.id,
            }).then((res)=>{
                console.log(res);
                if(res.data.key===1){ 
                  const employees = this.state.employees.filter(p => p.id !== employee.id);
                  this.setState({
                    employees:employees
                  })
                    swal("Success: ", res.data.txt, "success");
                }else{                    
                  swal("Error: ", res.data.txt, "error");
                }
            }).catch(function (error) {
                console.log(error);
            })
        }        
      });
    }

    render() {
      return (
    <div className="wrapper pb-5 mb-5">
    <div className="row">
      <div className="col-lg-12 d-flex justify-content-between align-items-center pt-4 pl-5">
        <h1 className="quicksand font-weight-bold">employee</h1>
        <Link to={'/add'} className="btn btn-primary rounded-pill" >add employee</Link>
      </div>
    </div>

    <div className="row mt-3">
      <div className="col-md-4">
          <SideBar />
      </div>
      <div className="col-md-8">
        <table className="beta-table" style={{width:'100%'}}>
          <thead>
            <tr className="table-header">
              <th className="py-3">
                <div className="form-check">
                  <input type="checkbox" />
                </div>
              </th>
              <th className="py-3">EMPLOYEE</th>
              <th className="py-3">SALARY</th>
              <th className="py-3">STATUS</th>
              <th className="py-3">MANAGE</th>
            </tr>
          </thead>
          
          <tbody>            
              { this.tabRow() }
          </tbody>
        </table>
      </div>
    </div>
  </div>
      );
    }
  }