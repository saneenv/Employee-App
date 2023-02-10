import React from 'react'
import Table from 'react-bootstrap/Table';
import employee from './Employee';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';

function Home() {

  let history=useNavigate()

  const handleDelete=(index)=>{
  
    // array of ids
    // let index=employee.map(item=>item.id).indexOf(id)
    employee.splice(index,1)

    history('/')

    }

const handleEdit=(id,uname,age,desig,salary)=>{
  localStorage.setItem("id",JSON.stringify(id))
  localStorage.setItem("uname",uname)
  localStorage.setItem("age",JSON.stringify(age))
  localStorage.setItem("desig",desig)
  localStorage.setItem("salary",JSON.stringify(salary))

}

  return (
    <>
      <h1 className='text-center text-warning p-3 mt-3 '>Employee Management System</h1>
      <div className='text-center p-2 fs-5'>
        <p className='p-3'>An employee management system or EMS is a tool that helps improve employee satisfaction and productivity to help a company achieve their overall goals.</p>
        <Link to='/add'>
          <Button className='mt-3' variant="outline-success">Add New Employee <i class="fa-solid ms-1 fa-user-plus"></i></Button>
        </Link>
        <Table striped bordered hover style={{ margin: '7rem', width: "85%" }}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Age</th>
              <th>Designation</th>
              <th>Salary</th>
              <th>Actions</th>

            </tr>
          </thead>
          <tbody>

            {
              employee && employee.length > 0 ?
                employee.map(item => (
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.age}</td>

                    <td>{item.desig}</td>
                    <td>{item.salary}</td>
                    <td >
                      <Link to='/edit'>
                        <Button onClick={()=>handleEdit(item.id,item.name,item.age,item.desig,item.salary)} className='ms-2 me-3' variant="info"><i class="fa-solid fa-user-pen"></i></Button>
                      </Link>
                      <Button onClick={()=>handleDelete(employee.indexOf(item))} variant="danger"><i class="fa-solid fa-trash-can"></i></Button>
                    </td>


                  </tr>
                )) : 'no table data'
            }

          </tbody>
        </Table>
      </div>
    </>
  )
}

export default Home
