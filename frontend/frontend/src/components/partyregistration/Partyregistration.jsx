import React from 'react'

import { Button } from 'react-bootstrap'
import Table from 'react-bootstrap/Table'
import { Link } from 'react-router-dom'

function Partyregistration() {
    return (
        <div style={{display:"flex"}}>
            <div>
   
            </div>
            <div style={{width:"100%"}}>
                <Link to = "/addregistration"><Button className='btn-primary' style={{ float: "right", margin: "20px" }}>Add Registration</Button></Link>
           
                <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
            </div>


        </div>
    )
}

export default Partyregistration