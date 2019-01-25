import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddTask from '../components/AddTask';
import ViewTask from '../components/ViewTask';
import EditTask from '../components/EditTask';
import * as actions from '../actions/taskAction';

class Tasky extends Component {
    constructor(){
        super();
        this.state={
            addTask:false,
            viewTask:false,
            editGroup:false,
            taskDetails:{}
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
            viewTask:false
        });
    }
    else if(type==='view'){
        this.setState({
            addTask:false,
            viewTask:true
        });
    }else{
this.setState({
            addTask:true,
            viewTask:false
        });
    }
    }
    render() {

        return (
            <div>
                <h1>Task Manager</h1>
               {!this.state.editGroup? 
               (<div className="row">
    <div className="col-md-6">
      <h2 onClick={event=>this.selectTask(event,'add')}>Add Task</h2>
    </div>
    <div className="col-md-6">
      <h2 onClick={event=>this.selectTask(event,'view')}>View task</h2>
    </div>
    <div className="row paddingLeft30">
    <div className="col-md-12">
{this.state.addTask?<AddTask/>:this.state.viewTask?<ViewTask callbackContainer={this.CallbackEdit}/>:''}
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

