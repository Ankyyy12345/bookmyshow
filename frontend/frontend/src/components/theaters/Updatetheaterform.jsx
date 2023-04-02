import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState,} from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Sidebar from "../sidebar/Sidebar";

const Updatetheaterform = () => {
  const location = useLocation();

  const data = location.state.data;

  const [student, setStudent] = useState({
    theater_id: data.theater_id,
    theater_name: data.theater_name,
    theater_address: data.theater_address,
    theater_type: data.theater_type,
    theater_size: data.theater_size,
    owner_id: data.owner_id,
  });

  const {
    owner_id,
    theater_address,
    theater_id,
    theater_name,
    theater_size,
    theater_type,
  } = student;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setStudent({ ...student, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const id = theater_id;

    const payload = {
      owner_id,
      theater_address,
      theater_id,
      theater_name,
      theater_size,
      theater_type,
    };

    const res = await axios.put(
      `http://localhost:2500/updateadd_theater/${id}`,
      payload
    );
    const data = await res.data;

    console.log(data)
  };

  return (
    <> <div style={{display:"flex"}}> <Sidebar />
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
            <Form.Label>Theater-Id</Form.Label>
            <Form.Control
              type="number"
              name="theater_id"
              value={theater_id}
              disabled
            />
          </Form.Group>

          <Form.Group
            className="mb-3"
            controlId="formBasicPassword"
            style={{ marginLeft: "400px" }}
          >
            <Form.Label>Theater-Name</Form.Label>
            <Form.Control
              onChange={handleChange}
              type="text"
              name="theater_name"
              value={theater_name}
            />
          </Form.Group>
        </div>
        <div style={{ display: "flex" }}>
          <Form.Group
            className="mb-3"
            controlId="formBasicPassword"
            style={{marginLeft:'280px'}}
          >
            <Form.Label>Theater_Address</Form.Label>
            <Form.Control
              onChange={handleChange}
              type="text"
              name="theater_address"
              value={theater_address}
            />
          </Form.Group>

          <Form.Group
            className="mb-3"
            controlId="formBasicPassword"
            style={{ marginLeft: "400px" }}
          >
            <Form.Label>Theater_Type</Form.Label>
            <Form.Control
              onChange={handleChange}
              type="text"
              name="theater_type"
              value={theater_type}
            />
          </Form.Group>
        </div>
        <div style={{ display: "flex" }}>
          <Form.Group
            className="mb-3"
            controlId="formBasicPassword"
            style={{marginLeft:'280px'}}
          >
            <Form.Label>Theater_Size</Form.Label>
            <Form.Control
              onChange={handleChange}
              type="number"
              name="theater_size"
              value={theater_size}
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="formBasicPassword"
            style={{ marginLeft: "400px" }}
          >
            <Form.Label>Owner_Id</Form.Label>
            <Form.Control
              onChange={handleChange}
              type="number"
              name="owner_id"
              value={owner_id}
              disabled
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

export default Updatetheaterform;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";

// const Updatetheaterform = () => {
//   const [formData, setFormData] = useState({
//     // Initialize state with empty values
//     theater_id: "",
//     theater_name: "",
//     theater_address: "",
//     theater_type: "",
//     theater_size: "",
//   });

//   const { theater_id } = useParams(); // Get the ID of the record to be updated from the URL

//   useEffect(() => {
//     // Fetch the data of the record to be updated
//     axios
//       .get(`http://localhost:2500/getadd_theater/${theater_id}`)
//       .then((res) => {
//         setFormData(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, [theater_id]);

//   const handleChange = (event) => {
//     // Update the form data state with the user's input
//     const { name, value } = event.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Send the updated data to the server
//     axios
//       .put(`http://localhost:2500/updateadd_theater/${theater_id}`, formData)
//       .then((res) => {
//         console.log(res);
//         // Redirect to the table view after the record is updated
//         window.location.href = "/dashboard";
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   return (
//     <div>
//       <h1>Update Table Data</h1>
//       <Form onSubmit={handleSubmit}>
//         <Form.Group>
//           <Form.Label>ID</Form.Label>
//           <Form.Control type="number" name="theater_id" value={formData.id} disabled />
//         </Form.Group>
//         <Form.Group>
//           <Form.Label>Name</Form.Label>
//           <Form.Control
//             type="text"
//             name="theater_name"
//             value={formData.theater_name}
//             onChange={handleChange}
//           />
//         </Form.Group>
//         <Form.Group>
//           <Form.Label>Address</Form.Label>
//           <Form.Control
//             type="text"
//             name="theater_address"
//             value={formData.theater_address}
//             onChange={handleChange}
//           />
//         </Form.Group>
//         <Form.Group>
//           <Form.Label>Type</Form.Label>
//           <Form.Control
//             type="text"
//             name="theater_type"
//             value={formData.theater_type}
//             onChange={handleChange}
//           />
//         </Form.Group>
//         <Form.Group>
//           <Form.Label>Size</Form.Label>
//           <Form.Control
//             type="text"
//             name="theater_size"
//             value={formData.theater_size}
//             onChange={handleChange}
//           />
//           </Form.Group>
//            <Form.Group>
//           <Form.Label>Owner-Id</Form.Label>
//            <Form.Control
//             type="number"
//             name="owner_id"
//             value={formData.owner_id}
//             onChange={handleChange}
//           />
//         </Form.Group>
//         <Button variant="primary" type="submit">
//           Update
//         </Button>
//       </Form>
//     </div>
//   );
// };

// export default Updatetheaterform;

// function Updatetheaterform() {

//   const {theater_id}= useParams();
//   // const hisrtory = useHistory();
//   const[owner,setOwner]=useState({
//     theater_id:"",
//     theater_name:"",
//     theater_address:"",
//     theater_type:"",
//     theater_size:"",
//     owner_id:""

//   });

//   // useEffect(()=>{
//   //   async function getOwner(){
//   //     try{
//   //       const owner = await axios.get(`http://localhost:2500/getadd_theater/${theater_id}`)
//   //       console.log(owner.data);
//   //       setOwner(owner.data);
//   //     }catch(error){
//   //       console.log("something goes wrong")
//   //     }
//   //   }
//   //       getOwner();
//   // },[theater_id])      /

//   useEffect(()=>{
//     fetch(`http://localhost:2500/getadd_theater/${theater_id}`).then((result)=>{
//       result.json().then((resp)=>{
//         // console.warn(resp)
//         setOwner(resp)
//       })
//     })
//   },[theater_id]);
//   console.warn(owner)
