import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState,useEffect } from 'react';
import employee from './Employee';
import uuid from 'react-uuid';
import { useNavigate } from 'react-router-dom';




function Add() {

  const [id,setId]=useState('')
   const [uname,setUname]=useState('')
   const [age,setAge]=useState('')
   const [desig,setDesig]=useState('')
   const [salary,setSalary]=useState('')

   let history=useNavigate()

   const handleAdd=(e)=>{
    e.preventDefault()
    let ids=uuid()
    let uniqueid=ids.slice(0,8)

    employee.push({
        id:uniqueid,
        name:uname,
        age:age,
        desig:desig,
        salary:salary
    }) 
     history('/')
   }

  return (
    <>
       <h1 className='text-center text-warning p-3 mt-3 '>Add Details Of Employee</h1>
            <div className='text-center p-2 fs-2'>
              <p className='p-3'>Effortlessly Onboard New Employees - Add Employee Information Quickly and Seamlessly, Automatically Assign Tasks, and Ensure a Smooth Integration into Your Workforce.</p>

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
        <Form.Control   type="text" required
        onChange={(e)=>setUname(e.target.value)}
        />
        
        <Form.Label>Employee Age</Form.Label>
        <Form.Control  type="text" required
         onChange={(e)=>setAge(e.target.value)} 
        />

        <Form.Label>Employee Designation</Form.Label>
        <Form.Control  type="text" required
        onChange={(e)=>setDesig(e.target.value)} 
        />

        <Form.Label>Employee Salary</Form.Label>
        <Form.Control  type="text" required
        onChange={(e)=>setSalary(e.target.value)} 
        />
      </Form.Group>

    
      <Button 
      onClick={(e)=>handleAdd(e)}
       variant="primary" type="submit">
        Add
      </Button>
    </Form>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default Add
