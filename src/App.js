import React, { StrictMode } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import ListComponentTask from './Componenets/ListComponentTask';

import SubTaskComponenet from './Componenets/SubTaskComponent';

class App extends React.Component {

  constructor(props) {

    super(props)

    this.state = {
      tasks_container: [],
      subtask_container: {},
      task_name: '',
      sub_task: '',
      id: '',
      error: '',
      values: false
    }
  }



  changeValue = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    })
  }


  addTaskList = (event) => {

    if (this.state.task_name === '') {
      console.log("Please input correct value")
    }
    else {
      let task1 = this.state.tasks_container
      let val = this.state.task_name
      let val1 = { name: val, status: false, count: 0, subtask: [] }
      task1.push(val1)
      this.setState({
        tasks_container: task1,
        task_name: ''
      })
    }
  }


  addSubTaskList = (event) => {
    if (this.state.id != '' && this.state.sub_task != '') {
      let container1 = this.state.subtask_container
      let sub2 = this.state.sub_task

      let ans = { name: sub2, status: false }
      container1.subtask.push(ans)

      this.setState({
        subtask_container: container1,
        sub_task: '',
        values: true
      })
    }
  }



  showtask = (item) => {

    let container1 = this.state.tasks_container
    for (let i = 0; i < container1.length; i++) {
      if (item.name === container1[i].name) {
        this.setState({
          subtask_container: container1[i],
          id: item.name,
          values: true
        })
        break;
      }
    }
  }


  checkAndUncheckSubTask = (val) => {

    let task = this.state.subtask_container

    for (let i = 0; i < task.length; i++) {
      if (task[i].task === val) {
        if (task[i].status === false) {
          task[i].status = true
        }
        else {
          task[i].status = false
        }
        break;
      }
    }

    this.setState({
      subtask_container: task
    })
  }


  checkAndUncheckTask = (val) => {
    let subTask = this.state.tasks_container
    if (val === this.state.id) {
      for (let i = 0; i < subTask.length; i++) {
        if (subTask[i].name === val) {
          if (subTask[i].status === false) {

            for (let j = 0; j < subTask[i].subtask.length; j++) {
              subTask[i].subtask[j].status = true
            }
            subTask[i].status = true

          }
          else {

            for (let j = 0; j < subTask[i].subtask.length; j++) {
              subTask[i].subtask[j].status = false
            }
            subTask[i].status = false
          }

          break;
        }
      }
      this.setState({
        tasks_container: subTask
      })
    }
    else {
      console.log("Please select the right list")
    }
  }

  deleteSubtask = (index) => {
    let deleteTAsk1 = this.state.subtask_container
    deleteTAsk1.subtask.splice(index, 1);
    this.setState({
      subtask_container: deleteTAsk1
    })

  }


  deleteTask = (index, item) => {
    let deleteTAsk1 = this.state.tasks_container
    if (item === this.state.id) {
      deleteTAsk1.splice(index, 1);
      this.setState({
        tasks_container: deleteTAsk1,
        id: '',
        values: false,
        subtask_container: {}
      })
    }
    else {
      deleteTAsk1.splice(index, 1);
      this.setState({
        tasks_container: deleteTAsk1
      })
    }
  }


  render() {

    // let TSC = () => this.state.tasks_container && this.state.tasks_container.map((item, index) => {
    //   return <div className="bdr1">{item.name}<button className="btn2" onClick={() => this.showtask(item)}><i className="fa fa-list" aria-hidden="true"></i></button><input type="checkbox" checked={item.status} className="chck1" onClick={() => this.checkAndUncheckTask(item.name)} /><button className="btn2" onClick={() => this.deleteTask(index, item.name)}><i className="fa fa-minus-square-o" aria-hidden="true" ></i></button></div>
    // })


    // let TSC=<ListComponentTask showList={this.showList} tasks_container={this.tasks_container} checkAndUncheckSubTask={this.checkAndUncheckSubTask} deleteTask={this.deleteTask}></ListComponentTask>



    let STRC = () => this.state.values === true && Object.entries(this.state.subtask_container.subtask).map((item, index) => {
      return <div className="bdr1">{item[1].name}<input type="checkbox" checked={item[1].status} className="chck1" onClick={() => this.checkAndUncheckSubTask(item[1].name)} /><button className="btn2" onClick={() => this.deleteSubtask(index)}><i className="fa fa-minus-square-o" aria-hidden="true" ></i></button></div>
    })

    var showSUBTASKLIST = () => {

      if (this.state.values === true)

        return (
          <div className="col-sm-4 offset-sm-4">
            <div className="head1" >SUBTASK LIST :: {this.state.id}</div>

            <input className="inpt2" type="text" name="sub_task" value={this.state.sub_task} placeholder="Enter the subtask" onChange={this.changeValue} required />
            <button onClick={this.addSubTaskList} className="btn3"><i className="fa fa-plus-circle" aria-hidden="true"></i></button>

            <div className="card">

              {STRC()}

            </div>

          </div>

        )
    }



    return (
      <div>

        <div className="jumbotron">  </div>

        <div className="container">

          <div className="row">

            <div className="col-sm-4">
              <h4 className="head1">TASK LIST </h4><br />

              <input className="inpt1" type="text" name="task_name" value={this.state.task_name} placeholder="Enter the task" onChange={this.changeValue} required />
              <button onClick={this.addTaskList} className="btn1"><i className="fa fa-plus-circle" aria-hidden="true"></i></button>

              <div className="card">
                

              <ListComponentTask showList={this.showList} tasks_container={this.tasks_container} checkAndUncheckSubTask={this.checkAndUncheckSubTask} deleteTask={this.deleteTask}></ListComponentTask>


              </div>

            </div>

            {showSUBTASKLIST()}

          </div>

        </div>


      </div>
    )
  }
}



export default App;
