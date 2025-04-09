import { getDocs, collection } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { getFireBase } from '../../firebase';
import {doc , deleteDoc} from 'firebase/firestore'
import { useNavigate } from 'react-router-dom';

function View() {

  let navigate = useNavigate()
  const [allEmp, setAllEmp] = useState([]);

  useEffect(() => {
    getData();
  }, setAllEmp)

  const getData = async () => {
    
    let data = await getDocs(collection(getFireBase, "Employee"))
    let newArr = [];
    let i = 0;
    data.forEach((doc) => {
      let emp = { ...doc.data(), ["id"]: doc.id }
      newArr[i++] = emp;
    })
    setAllEmp(newArr)
  }

  const onDelete = async(e,id)=>{
    e.preventDefault();
    console.log(id)
    await deleteDoc(doc(getFireBase,"Employee",id))
    getData()
  }

  const onUpdate = (id)=>{
    navigate('/edit/'+id)
  }

  return (
    <Table striped bordered hover className='w-75 mx-auto'>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          allEmp.map((emp) => (
            <tr>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.age}</td>
              <td><Button onClick={(e)=>onDelete(e,emp.id)} variant="danger">Delete</Button><Button onClick={()=>onUpdate(emp.id)} variant="primary">Edit</Button></td>
            </tr>
          ))
        }


      </tbody>
    </Table>
  )
}

export default View
