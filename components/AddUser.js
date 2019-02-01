import React, { Component } from 'react';
import mockData from './mockjson.json'

class AddUser extends Component {
   constructor(){
        super();
        this.state={
            fName:'',
            lName:'',
            eID:'',
            searchName:''
        }
        this.fNameChange=this.fNameChange.bind(this);
        this.lNameChange=this.lNameChange.bind(this);
        this.eIDChange=this.eIDChange.bind(this);
        this.reset=this.reset.bind(this);
        this.nameSearchChange=this.nameSearchChange.bind(this);
    }
    reset=()=>{
      this.setState({
        fName:'',
            lName:'',
            eID:''
      });
    }
    fNameChange=(event) =>{
        this.setState({
            fName:event.target.value
        });
    }
    lNameChange=(event) =>{
        this.setState({
            lName:event.target.value
        });
    }
    eIDChange=(event)=>{
      this.setState({
        eID:event.target.value
        });
    }
    nameSearchChange=(event)=>{
        this.setState({
            searchName:event.target.value
          });
      }
      userList=(data)=>{
        const fNameFilter=this.state.searchName ? x => x.fName.includes(this.state.searchName) : x => x;
        
  {return data.filter(fNameFilter).map((user) =>
        <div>
      <div className="row paddingTop10px paddingBottom20px">
      <div className="col-md-3">
        First Name
      </div>
      <div className="col-md-3">
      Last Name
      </div>
      <div className="col-md-3">
        Emp Id
      </div>
      <div className="col-md-3">
         
      </div>
      </div>
      <div className="row paddingTop10px paddingBottom20px borderBottom">
      <div className="col-md-3">
        {user.fName}
      </div>
      <div className="col-md-3">
      {user.lName}
      </div>
      <div className="col-md-3">
        {user.eId}
      </div>
      <div className="col-md-3 displayInlineFlex">
         <button type="button" className="btn btn-primary" onClick={() =>{this.editUser(user)}}>Edit</button>
         <span className="paddingLeft3px paddingright3px"></span>
         <button type="button" className="btn btn-primary">Delete</button>
      </div>
      </div>
      </div>
    )}
  
      }
      editUser=(user)=>{
        //this.props.callbackContainer(user);
      }
render() {
return (
<React.Fragment>
    <div className="row paddingTop10px">
    <div className="col-md-3">
      First Name:
    </div>
    <div className="col-md-9">
      <input type="text" name="fName" value={this.state.fName} onChange={this.fNameChange} className="addComponentWidth"/>
    </div>
    </div>
    <div className="row paddingTop10px">
    <div className="col-md-3">
      Last name:
    </div>
    <div className="col-md-9">
      <input type="text" name="lName" value={this.state.lName} onChange={this.lNameChange} className="addComponentWidth"/>
    </div>
    </div>
    <div className="row paddingTop10px">
    <div className="col-md-3">
      Employee ID:
    </div>
    <div className="col-md-9">
      <input type="text" name="eID" value={this.state.eID} onChange={this.eIDChange} className="addComponentWidth"/>
    </div>
    </div>
    <div className="row paddingTop10px">
      <div className="col-md-1">
      
    </div>
    <div className="col-md-1">
      <button type="button" class="btn btn-primary">Add</button>
    </div>
    <div className="col-md-10">
      <button type="button" class="btn btn-primary" onClick={()=>{this.reset()}}>Reset</button>
    </div>
    </div>
    
    <div className="row paddingTop10px">
    <div className="col-md-5">
    <input type="text" name="Task" value={this.state.searchName} placeholder="Search" onChange={this.nameSearchChange} className=""/>
    </div>
    <div className="col-md-1">
    Sort: 
    </div>
    <div className="col-md-2">
    <button type="button" class="btn btn-primary">First Name</button> 
    </div>
    <div className="col-md-2">
    <button type="button" class="btn btn-primary">Last Name</button>
    </div>
    <div className="col-md-2">
    <button type="button" class="btn btn-primary">Id</button>
    </div>
    </div>
    {this.userList(mockData.users)}
   </React.Fragment> 
);
   }}
export default AddUser;
