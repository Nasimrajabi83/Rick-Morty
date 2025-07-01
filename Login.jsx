import React, { useEffect, useState } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import './Login.css'
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useLayoutContext } from '../Context/context';
import { useForm } from 'react-hook-form';


function Login() {
  const {setIslogin}=useLayoutContext()
    const[login,setLogin]=useState()
    const[input,setInput]=useState()
    const[usLogin,setUsLogin]=useState(false)
    const navigate=useNavigate()
    const[error,setError]=useState('')
    const {register,handleSubmit}=useForm()


    useEffect(()=>{
        const getData=async()=>{
          fetch('http://localhost:3000/Char')
          .then(response => response.json())
          .then(json =>{setLogin(json)})
          
        }
        getData()
      },[])

      const handleLogin=(data)=>{
       
        const found=login.find(item=>item.name==input)
        console.log(input);
        if(found){
          setError('');
          setLogin(true);
          setIslogin(true);
          navigate('/');
        } else{
          setError('Erroooooor');
      }}
    
  return (
     <Container fluid className="loginpage d-flex align-items-center justify-content-center vh-100">
      <Row className="w-100 justify-content-center">
        <Col xs={11} sm={8} md={6} lg={4}>
          <div className="p-4 glass text-white">
          <FaUserCircle className='like' style={{color:'#079238',fontSize:'100px',marginRight:'auto',display:'block',marginLeft:'auto' }} />
            <Form onSubmit={handleSubmit(handleLogin)}>
              <Form.Group controlId="name" className="mb-3">
                <Form.Label className="a">Name</Form.Label>
                <Form.Control {...register('name')}type="name" placeholder="Enter your name" />
                {/* {error && <div style={{color:"red"}}>{error}</div>} */}
              </Form.Group>
              <div className="d-flex justify-content-between mb-3">
                <Form.Check className="a" type="checkbox" label="Reminder Me"/>
                <a href="#" className="a">Forget your account?</a>
              </div>
              <Button  variant="success" type="submit" className="w-100 mb-2">
                Login
              </Button>
              <div className="text-center">
                <a href="#" className="a">Register</a>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Login