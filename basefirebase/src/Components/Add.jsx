import {collection , addDoc} from 'firebase/firestore'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { getFireBase } from '../../firebase';


function Add() {

    const [newEmp,setNewEmp]=useState({});

    const onFormChange=(e)=>{
        setNewEmp({...newEmp,[e.target.name]:e.target.value})
    }

    const onFormSubmit = async(e)=>{
        e.preventDefault()
        console.log(newEmp)
        await addDoc(collection(getFireBase, "Employee"), newEmp);
    }

  return (
    <Form className='w-50 mx-auto' onSubmit={(e)=>onFormSubmit(e)}>
        <h1 className='text-center'>Add Employee</h1>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Name</Form.Label>
      <Form.Control type="text" onChange={(e)=>onFormChange(e)} name="name" placeholder="Enter name" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Age</Form.Label>
      <Form.Control type="number" onChange={(e)=>onFormChange(e)}  name="age" placeholder="Enter Age" />
    </Form.Group>

    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
  )
}

export default Add
