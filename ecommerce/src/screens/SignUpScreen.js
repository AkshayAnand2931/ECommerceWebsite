import { Container } from "@mui/system";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import  axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function SignUpScreen() {
    const navigate = useNavigate();
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');
    const [address,setAddress] = useState('');
    const [password,setPassword] = useState('');

    const submitHandler =  (e) => {
        e.preventDefault();
        console.log('submitted');
        try {
           const data = axios.post('/api/signup',{
            name,
            email,
            password,
            phone,
            address,
           });
           console.log(data);
           navigate(`/profile`);
        } catch (error) {
            
        }
    }
  return (
    <Container className="small-container" style={{padding:"20px",marginBottom:"5vh"}}>
      <Form onSubmit={submitHandler}>
        <h1 className="mb-5">Sign Up</h1>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" onChange={(e)=> setName(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={(e)=> setEmail(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={(e)=> setPassword(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="phone">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="number" placeholder="Enter phone number" onChange={(e)=> setPhone(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control type="" placeholder="Enter address" onChange={(e)=> setAddress(e.target.value)} />
        </Form.Group>
        <Button variant="primary" style={{background:"rgba(232, 28, 101, 0.83)",borderColor:"white"}} type="submit">
          Sign Up
        </Button>
      </Form>
    </Container>
  );
}
