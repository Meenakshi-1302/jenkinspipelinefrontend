import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./App2.css";

function Edit() {
  const { uid } = useParams();
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    console.log(uid);
    axios
      .get("http://localhost:8086/User/" + uid)
      .then((response) => setData(response.data))
      .catch((err) => console.log(err));
  }, [uid]);

  let handleSubmit = (e) => {
    e.preventDefault();
    axios.put("http://localhost:8086/User", data).then((res) => {
      alert("User Updated Successfully");
      navigate("/");
    });
  };

  return (
    <div>
      <div
        id="edit2"
        className="d-flex w-100 vh-100 justify-content-center align-items-center "
      >
        <div className="w-50 border bg-light p-5">
          <form onSubmit={handleSubmit}>
            <h1>UPDATE USERS DATA'S</h1>
            <div>
              <lable htmlFor="id">ID :</lable>
              <input
                type="number"
                disabled
                name="uid"
                className="form-control"
                value={data.uid}
                onChange={(e) => setData({ ...data, uid: e.target.value })}
              />
            </div>

            <div>
              <lable htmlFor="name">Name :</lable>
              <input
                type="text"
                name="uname"
                className="form-control"
                value={data.uname}
                onChange={(e) => setData({ ...data, uname: e.target.value })}
              />
            </div>
            <div>
              <lable htmlFor="DESIGNATION">Designation:</lable>
              <input
                type="text"
                name="desg"
                className="form-control"
                value={data.desg}
                onChange={(e) => setData({ ...data, desg: e.target.value })}
              />
            </div>

            <div>
              <lable htmlFor="roomno">Room No :</lable>
              <input
                type="text"
                name="roomno"
                className="form-control"
                value={data.roomno}
                onChange={(e) => setData({ ...data, roomno: e.target.value })}
              />
            </div>

            
            <br />

            <button className="btn btn-info ">Update</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Edit;
