import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { FcUndo} from "react-icons/fc";

const Registration = () => {
  const history = useNavigate;

  const [id] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const SaveData = () => {
    alert(email);
    let data = { id: id, name: name, email: email, password: password };
    fetch("http://localhost:2500/postregistration", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((resp) => {
      resp.json().then((result) => {
        history("/");
        console.warn("result", result);
      });
    });
  };

  return (
    <>
   
    <div
  
      style={{ backgroundColor: "lightcoral", width: "1536px", height: "637px" }}
    >
      <center>
        {" "}
        <h1 style={{ color: "whitesmoke" }}>Registration</h1>
      </center>

<Link to="/">
  <Button variant="outline-white" size="lg" style={{marginLeft:"10px",color:"whitesmoke",backgroundColor:"black" }}>Go Back
    <FcUndo style={{ color: "whitesmoke",fontSize:"30px" }} />
  </Button>
</Link>


      <Form>
        <div style={{ display: "flex" }}>


          <Form.Group
            className="mb-3"
            controlId="formBasicPassword"
            style={{ marginLeft: "670px" }}
          >
            <Form.Label style={{color:"whitesmoke",marginLeft:"75px",fontSize:"20px"}}>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </Form.Group>
        </div>



        <div style={{ display: "flex" }}>
          <Form.Group
            className="mb-3"
            controlId="formBasicPassword"
            style={{ marginLeft: "300px" }}
          >
            <Form.Label style={{color:"whitesmoke",marginLeft:"75px",fontSize:"20px"}}>Email</Form.Label>
            <Form.Control
              type="text"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group
            className="mb-3"
            controlId="formBasicPassword"
            style={{ marginLeft: "520px" }}
          >
            <Form.Label style={{color:"whitesmoke",marginLeft:"75px",fontSize:"20px"}}>Password</Form.Label>
            <Form.Control
              type="text"
              name="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Form.Group>
        </div>
        <center>
          {" "}
          <Button variant="danger" size="lg" type="submit" onClick={SaveData}>
          <Link to="/"  style={{color: "whitesmoke",textDecoration:"none"}} >
            Submit
      </Link>
    
          </Button>
        </center>
      </Form>
     
    </div>
    </>
  );
};

export default Registration;

// import React, { useState } from "react";
// import {
//   Button,
//   CssBaseline,
//   TextField,
//   Grid,
//   Box,
//   Typography,
//   Container,
//   createTheme,
//   ThemeProvider,

//   Avatar,

// } from "@mui/material";
// import Navbarr from "../components/header/Navbar";
// import Sidebar from "../components/sidebar/Sidebar";
// import { useNavigate, Link } from "react-router-dom";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
// // import { Visibility, VisibilityOff } from "@mui/icons-material";

// const theme = createTheme();

//  function Registration() {
//   const navigate = useNavigate();

//   let [id, setId] = useState("");
//   let [name, setName] = useState("");
//   let [email, setEmail] = useState("");
//   let [password, setPassword] = useState("");

//   async function submitData() {

// if (
//   !First_Name ||
//   !Last_Name ||
//   !Email_Address ||
//   !Password ||
//   !ConfirmPassword ||
//   !CityData ||
//   !StateData ||
//   !StateData ||
//   !Zip ||
//   !CountryData
// ) {
//   alert("Please fill all details");
//   return;
// } else if (Password !== ConfirmPassword) {
//   alert("Password not match");
//   return;
// }

//     let userData = {
//       id: id,
//       name: name,
//      email:email,
//       password: password,
//     };

//     let reqData = {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(userData),
//     };
//     fetch(`${process.env.REACT_APP_BASE_URL}/postregistration`, reqData)
//       .then((data) => console.log(`Please fill input fields ${data}`))
//       .catch((err) => alert(err));

//       alert("Registration Successfully")
//       navigate("/login")
//   }

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     console.log({
//       email: data.get("email"),
//       password: data.get("password"),
//     });
//   };

//   return (
//     <>
//       <Navbarr />
//         <Sidebar />
//       </div>
//       <div style={{ marginLeft: "200px", marginTop: "-50px" }}>
//           <Container component="main" maxWidth="sm">
//             <CssBaseline />
//             <Box
//               sx={{
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//               }}
//             >
//               <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
//                 <LockOutlinedIcon />
//               </Avatar>

//               <Typography component="h1" variant="h5">
//                 Sign up
//               </Typography>
//               <Box
//                 component="form"
//                 noValidate
//                 onSubmit={handleSubmit}
//                 sx={{ mt: 3 }}
//               >
//                 <Grid container spacing={2}>
//                   <Grid item xs={12} sm={6}>
//                     <TextField
//                       autoComplete="given-name"
//                       name="id"
//                       value={id}
//                       onChange={(e) => setId(e.target.value)}
//                       required
//                       type="text"
//                       fullWidth
//                       id="id"
//                       label="id"
//                       autoFocus
//                     />
//                   </Grid>
//                   <Grid item xs={12} sm={6}>
//                     <TextField
//                       required
//                       fullWidth
//                       id="name"
//                       value={name}
//                       onChange={(e) => setName(e.target.value)}
//                       label="name"
//                       name="name"
//                       autoComplete="name"
//                     />
//                   </Grid>

//                   <Grid item xs={12}>
//                     <TextField
//                       required
//                       fullWidth
//                       type="email"
//                       id="email"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                       label="email"
//                       name="email"
//                       autoComplete="email"
//                     />
//                   </Grid>

//                   <Grid item xs={12}>
//                     <TextField
//                       required
//                       fullWidth
//                       id="password"
//                       value={password}
//                       type= "password"
//                       onChange={(e) => setPassword(e.target.value)}
//                       label="password"
//                       name="password"
//                       autoComplete="password"
//                     />
//                   </Grid>

//                 </Grid>

//                 <Button
//                   onClick={submitData}
//                   type="submit"
//                   fullWidth
//                   variant="contained"
//                   sx={{ mt: 3, mb: 2 }}
//                 >
//                   {" "}
//                   Sign Up
//                 </Button>

//                 <Grid container justifyContent="flex-end">
//                   <Grid item>
//                     <Link
//                       to="/login"
//                       variant="body2"
//                       style={{ textDecoration: "none" }}
//                     >
//                       {"Already have an account? Login"}
//                     </Link>
//                   </Grid>
//                 </Grid>
//               </Box>
//             </Box>
//           </Container>
//         </ThemeProvider>
//       </div>

//       {/* </div> */}
//     </>
//   );
// }

// export default Registration
