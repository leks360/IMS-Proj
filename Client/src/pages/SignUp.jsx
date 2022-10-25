import React, { useState } from 'react'
import styled from 'styled-components';
import { axiosInstance } from '../utils/config.js';
const Container=styled.div`
    background-color: #5F9DF7;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Login=styled.div`
    background-color: white;
    opacity: 98%;
    border-radius: 10px;
    height:50%;
    width: 30%;
    display: flex;
    flex-direction: column;
    gap:15px;
`
const Title=styled.h1`
    align-self:center;
    padding:30px;
    
`
const Item=styled.div`
    display: flex;
    justify-content: center;
    gap:20px;
`

const Text=styled.h2`
    flex:1;
    text-align: end;
    font-weight: 300;
`
const Input=styled.input`
    flex:2;
    border:none;
    border-radius: 10px;
  
    margin-right: 40px;
    border-bottom: 1px solid grey;
`
const Btm=styled.div`
    display: flex;
    justify-content: center;
    margin-top: 30px;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
    gap:25px;
    
`
const Button=styled.button`
    border: none;
    background-color: #002E94;
    height: 32px;
    color:white;
    width: 100px;
    border-radius:30px;
    
    
`
const Show=styled.span`
    
`
export default function SignUp(props) {
    const [email,setEmail]=useState("");
    const [name,setName]=useState("");
    const [pass,setPass]=useState("");
    const handleLogin=async(e)=>{
       console.log("clickin");
        try{
        const res=await axiosInstance.post('/auth/signup',{email,name,password:pass});
        console.log(res);
        }catch(er){
            
        }
    }
    return (
       <Container>
        <Login>       
            <Title>Sign Up Page</Title>
            <Item>
                <Text>Username :</Text>
                <Input placeholder='Username' onChange={(e)=>setName(e.target.value)}></Input>
             </Item>
             <Item>
                <Text>Email :</Text>
                <Input placeholder='email' onChange={(e)=>setEmail(e.target.value)}></Input>
             </Item>
             <Item>
                <Text>Password :</Text>
                <Input type="password" onChange={(e)=>setPass(e.target.value)} placeholder='email'></Input>
             </Item>
             
             
             <Btm>
                <Btm>
                    <Button onClick={handleLogin}>Sign Up</Button>
                </Btm>
                <Show>Already Registered? then LoginIn</Show>
                <Button >Login In!</Button>
             </Btm>
        </Login>

        </Container>
    )
}
