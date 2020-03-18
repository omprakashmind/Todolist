import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Input from './Componenets/Input';
import MappingSubtask from './Componenets/MappingSubtask';
import MappingTask from './Componenets/MappingTask';


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


  render() {

    var showSUBTASKLIST = () => {

      if (this.state.values === true)

        return (
          <div className="col-sm-4 offset-sm-4">
            <div className="head1" >SUBTASK LIST :: {this.state.id}</div>

            <Input value={this.state.sub_task} changeValue={this.changeValue} addTaskList={this.addSubTaskList} >sub_task</Input>

            <div className="card">

              <MappingSubtask values={this.state.values} subtask_container={this.state.subtask_container}  ></MappingSubtask>

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

              <Input value={this.task_name} changeValue={this.changeValue} addTaskList={this.addTaskList} >task_name</Input>

              <div className="card">


                <MappingTask id={this.state.id} tasks_container={this.state.tasks_container} showtask={this.showtask} checkAndUncheckSubTask={this.checkAndUncheckTask}  ></MappingTask>


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
