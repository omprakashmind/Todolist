import React from 'react';


const ListComponent=()=>{
    var arr=['rohit','sohan']

    return(
         
        <div>
           {arr.map(function(item,index){
               return <li>{item}</li>
           })}

        </div>

    )

}

export default ListComponent;