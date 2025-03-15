import React, { useState } from "react";

import "./App.css";
function Form() {

    const data= {name:"",email:"",password:""   }
    const[inputData,setInputData]= useState(data);
    function sameer (e){e.target.focus }

  return (
    <form className="container" >
      <div className="header">
        <h1>Registration Form</h1>
        </div>
        <div>
          <input type="text" placeholder="Enter Your Name" name="name" value={inputData.name} onChange={sameer}></input>
        </div>
        <div>
          <input type="text"placeholder="Enter Your email"name="email" value={inputData.email} onChange={(e)=>{e.target.focus }}></input>
        </div>
        <div>
          <input type="text" placeholder="Enter Your Password" name="password" value={inputData.password} ></input>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
    </form>
  );
}
export default Form;
