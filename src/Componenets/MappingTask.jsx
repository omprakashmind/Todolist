import React from 'react';

class MappingTask extends React.Component{

    checkAndUncheckTask = (val) => {
        let subTask = this.props.tasks_container
        if (val === this.props.id) {
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

      deleteTask = (index, item) => {
        let deleteTAsk1 = this.props.tasks_container
        if (item === this.props.id) {
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



render(){



    let TSC = () => this.props.tasks_container && this.props.tasks_container.map((item, index) => {
        return <div className="bdr1">{item.name}<button className="btn2" onClick={() => this.props.showtask(item)}><i className="fa fa-list" aria-hidden="true"></i></button><input type="checkbox" checked={item.status} className="chck1" onClick={() => this.checkAndUncheckTask(item.name)} /><button className="btn2" onClick={() => this.deleteTask(index, item.name)}><i className="fa fa-minus-square-o" aria-hidden="true" ></i></button></div>
      })


     return(
        
        <>


             {TSC()}


        </>

     )

}

}







export default MappingTask


