import React from "react";
// import { Button } from 'react-bootstrap'
import Table from "react-bootstrap/Table";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Sidebar from "../sidebar/Sidebar";

import { FcApproval, FcPlus, FcFullTrash, FcSupport } from "react-icons/fc";
// import { FaBeer} from "@react-icons/all-files/fa/FaBeer";
  
// import { AiFillAlipaySquare } from "react-icons/ai";

const Theaters = () => {
  const [owner, setOwner] = useState([]);
  const navigate = useNavigate();
////////////////////////Get///////////////////////////////////
  async function getUsers() {
    const res = await fetch("http://localhost:2500/getadd_theater");
    const data = await res.json();

    setOwner(data);
  }

  useEffect(() => {
    getUsers();
  }, []);
///////////////////////////////////////////////////////////////

///////////////////////////////Delete////////////////////////

  function deleteUser(theater_id) {
    alert(theater_id);
    fetch(`http://localhost:2500/deleteadd_theater/${theater_id}`, {
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
            <h1 style={{ color: "whitesmoke"}}>Theater-List</h1>
          </center>

          <Link to="/addtheaterform">
            <FcPlus
              style={{
                marginLeft: "89%",
                fontSize: "40px",
                marginTop: "-50px",
              }}
            />
          </Link>

          <Table striped bordered hover variant="white" style={{ width: "100%",color:"whitesmoke" }}>
            <thead>
              <tr>
                <th>Theater-ID</th>
                <th>Theater_Name</th>
                <th>Theater-Location</th>
                <th>Theater_Type</th>
                <th>Theater_Size</th>
                <th>Owner-ID</th>
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
                      <td>{item.theater_id}</td>
                      <td>{item.theater_name}</td>
                      <td>{item.theater_address}</td>
                      <td>{item.theater_type}</td>
                      <td>{item.theater_size}</td>
                      <td>{item.owner_id}</td>
                      {/* <td> <Link to={`/updatetheaterform/${item.theater_id}`}><button>update</button></Link> </td> */}
                      <td>
                        {/* ////////////////////////Button//////////////////// */}


                        <button
                         style={{ backgroundColor: "green", color: "white" ,border:"white 2px solid",borderRadius:"5px", marginLeft: "20px",}}
                          onClick={() =>
                            navigate("/updatetheaterform", {
                              state: { data: item },
                            })
                          }
                        >
                          <FcSupport style={{fontSize:"22px"}} />
                          Update
                        </button>

                        <button
                        style={{ backgroundColor: "red", color: "white" ,border:"white 2px solid",borderRadius:"5px", marginLeft: "20px",}}
                          onClick={() => deleteUser(item.theater_id)}
                        >
                          <FcFullTrash  style={{fontSize:"22px"}} />
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

export default Theaters;
