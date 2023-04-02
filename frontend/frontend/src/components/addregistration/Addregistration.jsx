import React from 'react'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



function Addregistration() {
  return (
    <div style={{ display: "flex" }}>
      <div>
      </div>

      

       
      <Form style={{ marginLeft: '350px'}}>

      <Form.Group className="mb-6" controlId="formBasicEmail">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" />
          <Form.Text className="text-muted">
          privacy
          </Form.Text>
        </Form.Group>


        <Form.Group className="mb-6" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>


        <Form.Group className="mb-6" controlId="formBasicEmail">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="number" placeholder="+91xxxxxxxxxx" />
          <Form.Text className="text-muted">
            We'll never share your number with anyone else.
          </Form.Text>
        </Form.Group>


        <Form.Group className="mb-6" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        
        <Form.Group className="mb-6" controlId="formBasicEmail">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
          <Form.Text className="text-muted">
            We'll never share your password with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-6" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>


        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default Addregistration