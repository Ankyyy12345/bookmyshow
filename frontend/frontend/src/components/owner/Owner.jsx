import React from "react";
// import { Button } from 'react-bootstrap'
import Table from "react-bootstrap/Table";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Sidebar from '../sidebar/Sidebar';
import Button from "react-bootstrap/Button";
import { FcApproval, FcPlus, FcFullTrash, FcSupport } from "react-icons/fc";
// import { FaBeer} from "@react-icons/all-files/fa/FaBeer";

// import { AiFillAlipaySquare } from "react-icons/ai";

const Owner = () => {
  const [owner, setOwner] = useState([]);
  const navigate = useNavigate();
////////////////////////Get///////////////////////////////////
  async function getUsers() {
    const res = await fetch("http://localhost:2500/getparty");
    const data = await res.json();

    setOwner(data);
  }

  useEffect(() => {
    getUsers();
  }, []);
///////////////////////////////////////////////////////////////

///////////////////////////////Delete////////////////////////

 async function deleteUser(party_id) {
    alert(party_id);
   await fetch(`http://localhost:2500/deleteparty/${party_id}`, {
      method: "DELETE",
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp);
      });
    });
    getUsers();
  }
//////////////////////////////////////////////////////////////////
  return (
   <>
   <div style={{display:"flex"}}><Sidebar />
    <div style={{ backgroundColor:"lightcoral", width:"1320px",height:"637px" }}>
      <div >
   
        <div >
          <center>
            <h1 style={{ color: "whitesmoke"}}>Companies Connected With Us</h1>
          </center>

          <Link to="/addowner" style={{color:"whitesmoke"}}>
  <Button variant="outline-dark" size="md" style={{marginLeft:"1100px",color:"whitesmoke",marginTop:"-50px" }}>Add-Data
    <FcPlus style={{ color: "whitesmoke",fontSize:"30px",marginLeft:"10px" }} />
  </Button>
</Link>

          <Table striped bordered hover variant="white" style={{ width: "100%",color:"whitesmoke" }}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Total-Experience</th>
                <th>Connected-To-Company</th>
                <th>
                  {" "}
                  Operations
                  <FcApproval />
                </th>
              </tr>
            </thead>
            <tbody>

              {/* ////////////////////////////Mapping//////////////////////// */}
             
              {owner && owner.map((item, i) =>
                
                {  return (
                    <tr key={i}>
                      <td>{item.party_id}</td>
                      <td>{item.name}</td>
                      <td>{item.work_experience}</td>
                      <td>{item.duration}</td>
                      {/* <td> <Link to={`/updatetheaterform/${item.theater_id}`}><button>update</button></Link> </td> */}
                      <td>
                        {/* ////////////////////////Button//////////////////// */}


                        <button
                          style={{ backgroundColor: "green", color: "white" ,border:"white 2px solid",borderRadius:"5px"}}
                          onClick={() =>
                            navigate("/updateowner", {
                              state: { data: item },
                            })
                          }
                        >
                          <FcSupport style={{fontSize:"22px"}} />
                          Update
                        </button>

                        <button
                      style={{ backgroundColor: "red", color: "white" ,border:"white 2px solid",borderRadius:"5px", marginLeft: "20px",}}
                          onClick={() => deleteUser(item.party_id)}
                        >
                          <FcFullTrash style={{fontSize:"22px"}}/>
                          Delete
                        </button>
                        {/* ///////////////////////////////Button///////////////////////////// */}
                      </td>
                    </tr>
                  )}
                )}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default Owner;
