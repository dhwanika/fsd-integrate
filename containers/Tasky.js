import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddTask from '../components/AddTask';
import ViewTask from '../components/ViewTask';
import EditTask from '../components/EditTask';
import AddProject from '../components/AddProject';
import AddUser from '../components/AddUser';
import * as actions from '../actions/taskAction';

class Tasky extends Component {
    constructor(){
        super();
        this.state={
            addTask:false,
            viewTask:false,
            editGroup:false,
            taskDetails:{},
            addProject:false,
            addUser:false
        }
        this.selectTask=this.selectTask.bind(this);
    }
    componentDidMount(){
        const {getTask}=this.props;
        getTask();
    }
    CallbackEdit = (task) => {
        debugger;
        this.setState({
            editGroup: true,
            taskDetails:task
        });
    }
    selectTask=(event,type) =>{
        if(type==='add'){
        this.setState({
            addTask:true,
            viewTask:false,
            addUser:false,
            addProject:false
        });
    }
    else if(type==='view'){
        this.setState({
            addTask:false,
            viewTask:true,
            addUser:false,
            addProject:false
        });
    }
    else if(type==='proj'){
        this.setState({
            addTask:false,
            viewTask:false,
            addUser:false,
            addProject:true
        });
    }
    else if(type==='user'){
        this.setState({
            addTask:false,
            viewTask:false,
            addUser:true,
            addProject:false
        });
    }else{
this.setState({
            addTask:true,
            viewTask:false,
            addUser:false,
            addProject:false
        });
    }
    }
    render() {
const {taskList}= this.props;
        return (
            <div>
                <h1>Task Manager</h1>
               {!this.state.editGroup? 
               (<div className="row">
    <div className="col-md-3">
      <h2 onClick={event=>this.selectTask(event,'proj')}>Add Project</h2>
    </div>
    <div className="col-md-3">
      <h2 onClick={event=>this.selectTask(event,'add')}>Add task</h2>
    </div>
    <div className="col-md-3">
      <h2 onClick={event=>this.selectTask(event,'user')}>Add User</h2>
    </div>
    <div className="col-md-3">
      <h2 onClick={event=>this.selectTask(event,'view')}>View task</h2>
    </div>
    <div className="row paddingLeft30">
    <div className="col-md-12">
{this.state.addTask?<AddTask/>:this.state.viewTask?<ViewTask callbackContainer={this.CallbackEdit} taskList={taskList}/>:
this.state.addProject?<AddProject/>:this.state.addUser?<AddUser/>:''}
        </div>
        </div>
  </div>):
(<div className="row">
    <div className="col-md-12">
      <h2 onClick={event=>this.selectTask(event,'add')}>Edit Task</h2>
    </div>
    <div className="row paddingLeft30">
    <div className="col-md-12">
<EditTask taskDetails={this.state.taskDetails}/>
        </div>
        </div>
  </div>)
               }
                </div>
        );
    }
}
const mapStateToProps = (state) => ({
    taskList:state.taskList
});


const mapActionToProps = ({
    /*createTask,updateTask,setPriorityFilter,setSearchText,deleteTask,*/
});

export default connect(mapStateToProps, {getTask:actions.getTasksAction})(Tasky);

