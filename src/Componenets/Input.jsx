import React from 'react';


class Input extends React.Component{
        constructor(props){
            super(props);
            this.state={
                data:''
            }
        }

    
    executeFunction=()=>{
        this.props.addTaskList();
        
        this.props.showValueCall(this.state.data);

    }


    render(){

      return(

       <>
           <input className="inpt1" type="text" name={this.props.children}    value={this.props.task_name} placeholder="Enter the task" onChange={this.props.changeValue} required />
                 <button onClick={()=>this.executeFunction()} className="btn1"><i className="fa fa-plus-circle" aria-hidden="true"></i></button>
    </>

   )


    }
}


export default Input;
