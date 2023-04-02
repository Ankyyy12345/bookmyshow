import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
  import Form from 'react-bootstrap/Form';
  import Sidebar from '../sidebar/Sidebar';

const Addowner = () => {


    const [party_id] = useState("")
    const [name,setName] = useState("")
    const [work_experience,setWork] = useState("")
    const [duration,setDuration] = useState("")

 

    const SaveData =()=>{
      alert(party_id)
      let data={party_id,name,work_experience,duration}
    fetch("http://localhost:2500/postparty",{
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
    <><div style={{display:"flex"}}> <Sidebar />
   <div style={{backgroundColor:"lightcoral", width:"1336px",height:"637px"}}>
   <center> <h1 style={{ color: "whitesmoke"}}>ADD-Companies</h1></center>
<Form >
  <div style={{display:'flex'}}>
        
          <Form.Group className="mb-3" controlId="formBasicPassword" style={{marginLeft:'575px'}}>
            <Form.Label>Company-Name</Form.Label>
            <Form.Control type="text" name="theater_name" value={name} onChange={(e)=>{setName(e.target.value)}} />
          </Form.Group>
          </div>
          <div style={{display:'flex'}}>
          <Form.Group className="mb-3" controlId="formBasicPassword" style={{marginLeft:'280px'}}>
            <Form.Label>Total-Experience</Form.Label>
            <Form.Control type="text"  name="theater_address"  value={work_experience} onChange={(e)=>{setWork(e.target.value)}}/>
          </Form.Group>
        
          <Form.Group className="mb-3" controlId="formBasicPassword" style={{marginLeft:'400px'}}>
            <Form.Label>Duration Time with Us</Form.Label>
            <Form.Control type="text"  name="theater_type"  value={duration} onChange={(e)=>{setDuration(e.target.value)}} />
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

export default Addowner