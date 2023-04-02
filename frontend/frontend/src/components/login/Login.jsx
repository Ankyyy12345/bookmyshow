import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate ,Link} from "react-router-dom";
import { FcUndo} from "react-icons/fc";

const Login = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFullName({ ...fullName, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const config = {
      "Content-Type": "application/json",
    };
    const apiData = await axios.post(
      "http://localhost:2500/postlogin",
      fullName,
      config
    );
    if (apiData.data.status === 200) {
      localStorage.setItem("token", apiData.data.token);
      localStorage.setItem("email", apiData.data.email);
      navigate("/user/dashboard");
    } else {
      console.log("error");
    }
  };

  return (
    <div
      style={{ backgroundColor: "lavender", width: "1536px", height: "637px" }}
    >
      <center>
        <h1 style={{ color: "whitesmoke" }}>Login</h1>
      </center>
      <Link to="/registration">
  <Button variant="outline-white" size="lg" style={{marginLeft:"10px",color:"whitesmoke",backgroundColor:"black" }}>Register
    <FcUndo style={{ color: "whitesmoke",fontSize:"30px" }} />
  </Button>
</Link>

      <Form onSubmit={handleSubmit}>
        <div style={{ display: "flex" }}>
          <Form.Group
            className="mb-3"
            controlId="formBasicEmail"
            style={{ marginLeft: "353px" }}
          >
            <Form.Label style={{color:"whitesmoke",marginLeft:"75px",fontSize:"20px"}}>Email</Form.Label>
            <Form.Control type="email" name="email" onChange={handleChange} />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="formBasicPassword"
            style={{ marginLeft: "420px" }}
          >
            <Form.Label style={{color:"whitesmoke",marginLeft:"70px",fontSize:"20px"}}>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              onChange={handleChange}
            />
          </Form.Group>
        </div>
        <center>
          <Button variant="danger" size="lg"  type="submit" >
            Submit
          </Button>
        </center>
      
      </Form>
    </div>
  );
};

export default Login;
