import {getDocs,collection, updateDoc ,doc } from 'firebase/firestore'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';
import { getFireBase } from '../../firebase';
import { useParams } from 'react-router-dom';


function Update() {

    const [newEmp,setNewEmp]=useState({});
    let id = useParams();
    console.log(id)

    useEffect(()=>{
        getData();
    },setNewEmp);

    const getData = async () => {
        
        let data = await getDocs(collection(getFireBase, "Employee"))
        let newArr = [];
        let i = 0;
        data.forEach((doc) => {
            if(doc.id==id.id)
            {
                let emp = { ...doc.data(), ["id"]: doc.id }
                setNewEmp(emp)
            }
         
        })
      }

    const onFormChange=(e)=>{
        setNewEmp({...newEmp,[e.target.name]:e.target.value})
    }

    const onFormSubmit = async(e)=>{
        e.preventDefault()
        console.log(newEmp)
        await updateDoc(doc(getFireBase,"Employee",id.id),newEmp)
    }

  return (
    <Form className='w-50 mx-auto' onSubmit={(e)=>onFormSubmit(e)}>
        <h1 className='text-center'>Add Employee</h1>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Name</Form.Label>
      <Form.Control type="text" onChange={(e)=>onFormChange(e)} value={newEmp.name ? newEmp.name : ""} name="name" placeholder="Enter name" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Age</Form.Label>
      <Form.Control type="number" onChange={(e)=>onFormChange(e)} value={newEmp.age ? newEmp.age : ""}  name="age" placeholder="Enter Age" />
    </Form.Group>

    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
  )
}

export default Update
