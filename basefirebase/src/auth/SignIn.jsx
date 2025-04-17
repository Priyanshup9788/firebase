import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {auth} from "../../firebase"
import {signInWithEmailAndPassword} from "firebase/auth"
import { useNavigate } from 'react-router-dom';

const SignIn = () => {

    let navigate = useNavigate()
  const [user,setUser] = useState({});

  const onFormChange = (e)=>{
    setUser({...user,[e.target.name]:e.target.value})
  }

  const onSignUp = (e)=>{
    e.preventDefault();
    console.log(user);
    signInWithEmailAndPassword(auth,user.email,user.password)
    .then((user)=>{
      console.log(user.user);
      navigate("/view")
    })
    .catch((err)=>{
      console.log(err.message )
    })
  }

  return (
    <Form className='w-50 mx-auto' onSubmit={(e)=>onSignUp(e)}>
        <h1 className='text-center'>Login</h1>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>UserName</Form.Label>
      <Form.Control type="email" onChange={(e)=>onFormChange(e)} value={user.email ? user.email : ""} name="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" onChange={(e)=>onFormChange(e)} value={user.password ? user.password : ""}  name="password" placeholder="Enter password" />
    </Form.Group>

    <Button variant="primary" type="submit">
      LogIn
    </Button>
  </Form>
  )
}

export default SignIn