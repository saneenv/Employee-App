import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState,useEffect } from 'react';
import employee from './Employee';
import { useNavigate } from 'react-router-dom';


function Edit() {
   const [id,setId]=useState(0)
   const [uname,setUname]=useState('')
   const [age,setAge]=useState(0)
   const [desig,setDesig]=useState('')
   const [salary,setSalary]=useState(0)

   useEffect(()=>{

  setId(JSON.parse(localStorage.getItem("id")))
    setId(JSON.parse(localStorage.getItem("id")))
    setUname(localStorage.getItem("uname"))
    setAge(JSON.parse(localStorage.getItem("age")))
    setDesig(localStorage.getItem("desig"))
    setSalary(JSON.parse(localStorage.getItem("salary")))




   },[])

   var index=employee.map((item)=>item.id).indexOf(id)
   let history=useNavigate()

   const handleUpdate=(e)=>{
    e.preventDefault()
   

   let emp=employee[index]

   emp.name=uname
   emp.age=age
   emp.desig=desig
   emp.salary=salary

   history('/')

   }



  return (
    <>
            <h1 className='text-center text-warning p-3 mt-3 '>Update Details Of Employee</h1>
            <div className='text-center p-2 fs-2'>
              <p className='p-3'>Edit Employee Information with Ease - Make Changes to Employee Records Quickly and Accurately. Stay Up-to-Date with Real-Time Updates and Ensure Consistency Across Your Workforce.</p>

            </div>
          
    <Container>
      <Row>
        <Col md={4}>
          <img className='w-100 mt-5' src='https://i.postimg.cc/442Ky2YH/contact-person-icon.png'/>
        </Col>
        <Col md={8}>
        <Form className='border p-5'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Employee Name</Form.Label>
        <Form.Control value={uname}  type="text" onChange={(e)=>setUname(e.target.value)}/>
        
        <Form.Label>Employee Age</Form.Label>
        <Form.Control value={age} type="text" onChange={(e)=>setAge(e.target.value)} />

        <Form.Label>Employee Designation</Form.Label>
        <Form.Control value={desig} type="text" onChange={(e)=>setDesig(e.target.value)} />

        <Form.Label>Employee Salary</Form.Label>
        <Form.Control value={salary} type="text" onChange={(e)=>setSalary(e.target.value)} />
      </Form.Group>

    
      <Button onClick={(e)=>handleUpdate(e)} variant="primary" type="submit">
        update
      </Button>
    </Form>
        </Col>
      </Row>
    </Container>
  



    </>
  )
}

export default Edit
