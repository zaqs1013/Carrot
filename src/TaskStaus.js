import React from 'react'
import { FaCheck } from "react-icons/fa";
export default function TaskStaus({checked, onComplete}) {

   const style = {
        border: '2px solid green',
        padding: '16px',
        margin: '10px',
        height: '40px',
        width : '150px',
    }

  return (
    <div  onClick={onComplete} className="Task" style={style} >
       판매가능 {checked ? <FaCheck /> : " "}
   
    </div>
  )
}