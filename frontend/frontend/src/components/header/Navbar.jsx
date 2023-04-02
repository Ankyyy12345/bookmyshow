 // import { ForkLeftOutlined } from '@mui/icons-material';
 import Container from 'react-bootstrap/Container';
 import Navbar from 'react-bootstrap/Navbar';
 import './Navbar.css'
 
 function Navbarr() {
   return (
     <div style={{backgroundColor: "aliceblue"}} >
     <Navbar bg>
     <Container>
       <Navbar.Brand href="#home">
 
         <img
           src="https://imgs.search.brave.com/47ZlPwQQaht0rP3qVl_GCZg-UxYSU0Pnb5RCy98d6eY/rs:fit:1170:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5W/ZzdMQUh2Q1ZiU2th/YVBTNHdyNnF3SGFE/QSZwaWQ9QXBp"
           width="50"
           height="50"
           className="d-inline-block align-top"
           alt="React Bootstrap logo"
           style={{borderRadius: "90%"}}
         />
       </Navbar.Brand>
     </Container>
        
         <h3 style={{color: "skyblue"}}>Welcome:Anurag</h3>
        
       
   </Navbar>  
   </div>
   );
 }
 
 export default Navbarr;