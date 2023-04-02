import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState,} from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Sidebar from "../sidebar/Sidebar";

const Updateowner = () => {
  const location = useLocation();

  const data = location.state.data;

  const [student, setStudent] = useState({
    party_id: data.party_id,
    name: data.name,
    work_experience: data.work_experience,
    duration: data.duration,

  });

  const {
    party_id,
    name,
    work_experience,
    duration,
  } = student;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setStudent({ ...student, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const id = party_id;

    const payload = {
        party_id,
        name,
        work_experience,
        duration,
    };

    const res = await axios.put(
      `http://localhost:2500/updateparty/${id}`,
      payload
    );
    const data = await res.data;

    console.log(data)
  };

  return (
    <><div style={{display:"flex"}}><Sidebar />
    <div style={{ backgroundColor: "lightcoral" , width:"1336px",height:"637px" }}>
      <center>
        <h1 style={{ color: "whitesmoke"}}>Update</h1>
      </center>

      <Form onSubmit={handleSubmit}>
        <div style={{ display: "flex" }}>
          <Form.Group
            className="mb-3"
            controlId="formBasicEmail"
            style={{marginLeft:'280px'}}
          >
            <Form.Label>Id</Form.Label>
            <Form.Control
              type="number"
              name="party_id"
              value={party_id}
              disabled
            />
          </Form.Group>

          <Form.Group
            className="mb-3"
            controlId="formBasicPassword"
            style={{ marginLeft: "400px" }}
          >
            <Form.Label>Company-Name</Form.Label>
            <Form.Control
              onChange={handleChange}
              type="text"
              name="name"
              value={name}
            />
          </Form.Group>
        </div>
        <div style={{ display: "flex" }}>
          <Form.Group
            className="mb-3"
            controlId="formBasicPassword"
            style={{marginLeft:'280px'}}
          >
            <Form.Label>Total-Experience</Form.Label>
            <Form.Control
              onChange={handleChange}
              type="text"
              name="work_experience"
              value={work_experience}
            />
          </Form.Group>

          <Form.Group
            className="mb-3"
            controlId="formBasicPassword"
            style={{ marginLeft: "400px" }}
          >
            <Form.Label>Duration Time with Us</Form.Label>
            <Form.Control
              onChange={handleChange}
              type="text"
              name="duration"
              value={duration}
            />
          </Form.Group>
        </div>
        <center>
          {" "}
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </center>
      </Form>
    </div>
    </div></>
  );
};

export default Updateowner;
