import React from 'react';

class MappingSubtask extends React.Component{
   
  checkAndUncheckSubTask = (val) => {

    let task = this.props.subtask_container

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



  addSubTaskList = (event) => {
    if (this.props.id != '' && this.props.sub_task != '') {
      let container1 = this.props.subtask_container
      let sub2 = this.props.sub_task

      let ans = { name: sub2, status: false }
      container1.subtask.push(ans)

      this.setState({
        subtask_container: container1,
        sub_task: '',
        values: true
      })
    }
  }


  deleteSubtask = (index) => {
    let deleteTAsk1 = this.props.subtask_container
    deleteTAsk1.subtask.splice(index, 1);
    this.setState({
      subtask_container: deleteTAsk1
    })
  }


         
    render(){

        let STRC = () => this.props.values === true && Object.entries(this.props.subtask_container.subtask).map((item, index) => {
            return <div className="bdr1">{item[1].name}<input type="checkbox" checked={item[1].status} className="chck1" onClick={() => this.checkAndUncheckSubTask(item[1].name)} /><button className="btn2" onClick={() => this.deleteSubtask(index)}><i className="fa fa-minus-square-o" aria-hidden="true" ></i></button></div>
          })
      
     return(
  
       <>
        {STRC()}
       </>
      
        )
    }
}


export default MappingSubtask;
