import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
  import Form from 'react-bootstrap/Form';
  import Sidebar from '../sidebar/Sidebar';

const Addtheaterform = () => {


    const [theater_id,setTheater_id] = useState("")
    const [theater_name,setTheater_name] = useState("")
    const [theater_address,setTheater_address] = useState("")
    const [theater_type,setTheater_type] = useState("")
    const [theater_size,setTheater_size] = useState("")
    const [owner_id,setOwner_id] = useState("")
 

    const SaveData =()=>{
      alert(theater_id)
      let data={theater_id,theater_name,theater_address,theater_type,theater_size,owner_id}
    fetch("http://localhost:2500/postadd_theater",{
    method:"POST" ,
    headers:{
    'Accept': 'application/json',  
    "Content-type":"application/json"
    },
    body:JSON.stringify(data)
}).then((resp)=>{
    resp.json().then((result)=>{
        console.warn("result",result)
    })
})
}
  

  return (
    <><div style={{display:"flex"}}><Sidebar />
   <div style={{backgroundColor:"lightcoral", width:"1320px",height:"637px"}}>
   <center> <h1 style={{ color: "whitesmoke"}}>ADD</h1></center>
<Form >
  <div style={{display:'flex'}}>
   
          <Form.Group className="mb-3" controlId="formBasicEmail" style={{marginLeft:'280px'}}>
            <Form.Label>Theater-Id</Form.Label>
            <Form.Control type="number" name="theater_id" value={theater_id} onChange={(e)=>{setTheater_id(e.target.value)}} />
          </Form.Group><br/>
    
          <Form.Group className="mb-3" controlId="formBasicPassword" style={{marginLeft:'400px'}}>
            <Form.Label>Theater-Name</Form.Label>
            <Form.Control type="text" name="theater_name" value={theater_name} onChange={(e)=>{setTheater_name(e.target.value)}} />
          </Form.Group>
          </div>
          <div style={{display:'flex'}}>
          <Form.Group className="mb-3" controlId="formBasicPassword" style={{marginLeft:'280px'}}>
            <Form.Label>Theater_Address</Form.Label>
            <Form.Control type="text"  name="theater_address"  value={theater_address} onChange={(e)=>{setTheater_address(e.target.value)}}/>
          </Form.Group>
        
          <Form.Group className="mb-3" controlId="formBasicPassword" style={{marginLeft:'400px'}}>
            <Form.Label>Theater_Type</Form.Label>
            <Form.Control type="text"  name="theater_type"  value={theater_type} onChange={(e)=>{setTheater_type(e.target.value)}} />
          </Form.Group>
</div>
<div style={{display:'flex'}}>
          <Form.Group className="mb-3" controlId="formBasicPassword" style={{marginLeft:'280px'}}>
            <Form.Label>Theater_Size</Form.Label>
            <Form.Control type="number"  name="theater_size"  value={theater_size} onChange={(e)=>{setTheater_size(e.target.value)}}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword" style={{marginLeft:'400px'}}>
            <Form.Label>Owner_Id</Form.Label>
            <Form.Control type="number" name="owner_id" value={owner_id} onChange={(e)=>{setOwner_id(e.target.value)}} />
          </Form.Group>
          </div>
         <center> <Button variant="primary" type="submit" onClick={SaveData}>
            Submit
          </Button>
          </center>
        </Form>
        </div>
        </div></>
  )
}

export default Addtheaterform