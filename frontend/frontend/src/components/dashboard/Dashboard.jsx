import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Pie from './chart';
import Sidebar from '../sidebar/Sidebar';

const Dashboard = ()=>{

    return (
        <>
        <div style={{ display: "flex" }}><Sidebar />
     
            <div style={{ backgroundColor:"lavender" ,width:"1320px",height:"200px"}} >
                
                <div>
                
                </div>

                <div style={{ display: "flex" }} >
                    <div>
                        <Card style={{ width: '12.5rem', margin:"25px",color:"skyblue",backgroundColor:"lightcyan" }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Total Theaters</Card.Title>
                                <Card.Text>
                                    500
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card style={{ width: '12.5rem', margin:"25px",color:"yellow",backgroundColor:"paleturquoise" }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>total Customers</Card.Title>
                                <Card.Text>
                                    10,510
                                </Card.Text>
                                <Button variant="warning">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card style={{ width: '12.5rem', margin:"25px",color:"green",backgroundColor:"powderblue" }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>total Profit</Card.Title>
                                <Card.Text>
                                    100cr
                                </Card.Text>
                                <Button variant="success">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card style={{ width: '12.5rem', margin:"25px",color:"red",backgroundColor:"lavender" }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>total cities</Card.Title>
                                <Card.Text>
                                   156
                                </Card.Text>
                                <Button variant="danger">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card style={{ width: '12.5rem', margin:"25px",color:"info",backgroundColor:"lightblue" }}>
                            <Card.Img variant="top" src="l" />
                            <Card.Body>
                                <Card.Title>total cities</Card.Title>
                                <Card.Text>
                                   156
                                </Card.Text>
                                <Button variant="info">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div><br/>
               
            <div style={{backgroundColor:"red"}} ><Pie /></div>
            </div>
           
            </div>
        </>
    )
}

export default Dashboard