import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App2.css";

function Add() {
  const [inputData, setInputData] = useState({
    uname: "",
    desg: "",
    roomno: "",
    
  });

  // const naviget = useNavigate();

  let handleSubmit = (e) => {
    // e.preventDefault();
    // let result = validateValues(inputData);
    // setSubmitting(true);

    // if (result === true) {
    //   axios
    //     .post("http://localhost:8086/User", inputData)
    //     // .then((res) => {
    //     //   alert("Data added Successfully");
    //     //   naviget("/");
    //     //   console.log(res.data);
    //     // })
    //     // .catch((err) => console.log(err));
    // } else {
    //   alert("Please Enter the Valid Inputs!!!");
    // }
  };

  // validation Part for add user for student management system
  // const [errors, setErrors] = useState({});
  // const [submitting, setSubmitting] = useState(false);

  const validateValues = (inputData) => {
    if (inputData.uname.length === 0) {
      alert("Please enter User Name !!! ");
      return false;
    } else if (inputData.desg.length === 0) {
      alert("Please enter designation !!!");
      return false;
    } else if (inputData.roomno === 0) {
      alert("Please enter roomno!!!");
      return false;
    } 
     else {
      return true;
    }
  };

  return (
    <div
      id="add2"
      className="d-flex w-100 vh-100 justify-content-center align-items-center "
    >
      <div className="w-50 border bg-light p-5">
        <form onSubmit={handleSubmit}>
          <h1>ADD USER DATA</h1>
          <div>
            <lable htmlFor="name" role="namelabel" >Name</lable>
            <input
              type="text"
              role="namefield"
              name="uname"
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, uname: e.target.value })
              }
            />
          </div>
          <div>
            <lable htmlFor="Designation">Designation :</lable>
            <input
              type="text"
              name="desg"
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, desg: e.target.value })
              }
            />
          </div>

          <div>
            <lable htmlFor="roomno">RoomNo :</lable>
            <input
              type="text"
              name="roomno"
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, roomno: e.target.value })
              }
            />
          </div>

         
          <br />

          <button className="btn btn-info ">Submit</button>
        </form>

        
      </div>
    </div>
  );
}

export default Add;
