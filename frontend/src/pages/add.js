import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import { Redirect,Link } from 'react-router-dom';
import SideBar from '../components/sideBar';
 
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

import {CONFIG} from '../constants';
import {handleDate} from '../helpers/helper';
import swal from 'sweetalert';
const acceptedTypes = [
    'image/png',
    'image/jpg',
    'image/jpeg',
];
export default class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            position: '',
            salary: '',
            contract: '',
            probation: '',
            avatar: '',
            redirectToList: false
        };
      }  

    handleInput = (e) =>{
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    
    handleFileChange = (e) =>{
        this.setState({
            avatar: e.target.files[0],
        })
    }

    
  onSubmit = (e) => {
    e.preventDefault();
    //const params = new URLSearchParams();
    const params = new FormData(); // Use this because of the avatar (File Upload)
    params.append('first_name', this.state.first_name);
    params.append('last_name', this.state.last_name);
    params.append('position', this.state.position);
    params.append('salary', this.state.salary);
    params.append('contract', this.state.contract);
    params.append('probation', this.state.probation);
    params.append('avatar', this.state.avatar);
    axios({
    method: 'post',
    url: CONFIG.APP_ENDPOINT + "add_employee",
    data: params
    }).then((res)=>{
        if(res.data.key===1){            
            this.setState({
                first_name: '',
                last_name: '',
                position: '',
                salary: '',
                contract: '',
                probation: '',
                avatar: '',
                redirectToList: true
            })
            swal("Success: ", res.data.txt, "success");
        }else{
            swal("Error: ", res.data.txt, "error");
        }
    });
  }

    render() {
        const redirectToList = this.state.redirectToList;
        if (redirectToList === true) {
            return <Redirect to="/" />
        }
        return (
            
    <div className="wrapper pb-5 mb-5">
    <div className="row">
      <div className="col-lg-12 d-flex justify-content-between align-items-center pt-4 pl-5">
        <h1 className="quicksand font-weight-bold">employee</h1>
        <Link to={'/'} className="btn btn-primary rounded-pill" >back to list</Link>
      </div>
    </div>

    <div className="row mt-3">
      <div className="col-md-4">
          <SideBar />
      </div>
      <div className="col-md-8">
        
      <div style={{marginTop: 10}}>
            <h3>Add an Employee</h3>
            <form onSubmit={this.onSubmit}>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className="form-group">
                            <label>First Name:  </label>
                            <input name='first_name' type="text" value={this.state.first_name} onChange={this.handleInput}  className="form-control" />
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className="form-group">
                            <label>Last Name: </label>
                            <input name='last_name' type="text" value={this.state.last_name} onChange={this.handleInput} className="form-control"/>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className="form-group">
                            <label>Position: </label>
                            <input name='position' type="text" value={this.state.position} onChange={this.handleInput} className="form-control"/>
                        </div>
                    </div>                    
                    <div className='col-md-6'>
                        <div className="form-group">
                            <label>Salary: </label>
                            <input name='salary' type="text" value={this.state.salary} onChange={this.handleInput} className="form-control"/>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className="form-group">
                            <label>Contract Type:  </label><br/>
                            <select name='contract' value={this.state.contract}  onChange={this.handleInput}  className="form-control">
                                <option value="">Select Contract</option>
                                <option value="Full Time">Full Time</option>
                                <option value="Part Time">Part Time</option>
                                <option value="Probation">Probation</option>
                            </select>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className="form-group">
                            <label>Probation Period:  </label><br/>
                            <input name='probation' type="text" value={this.state.probation} onChange={this.handleInput}  disabled={(this.state.contract !='Probation') ? 'disabled' : ''} className="form-control"/>
                        </div>
                    </div>
                </div>
                
                <div className='row'>
                    <div className='col-md-12'>
                        <div className="form-group">
                            <button className="file-chooser-button" type="button">Upload Employee Avatar
                                <input className="file-input" type="file" name="avatar"  onChange={this.handleFileChange} accept={acceptedTypes.toString()}/>
                            </button> <small>optional</small>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <input type="submit" value="Add Employee" className="btn btn-primary"/>
                </div>
            </form>
        </div>
        

      </div>
    </div>
  </div> 
            
        )
    }
}