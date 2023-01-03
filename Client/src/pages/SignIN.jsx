import React, { useState } from 'react'
import styled from 'styled-components';
import { axiosInstance } from '../utils/config.js';
import {useDispatch,useSelector} from 'react-redux';
import { loginSuccess,loginFailure,loginStart,logout } from '../redux/userSlice.js';
import { useNavigate } from 'react-router-dom';
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
    padding:20px;
`
const Title=styled.h1`
    align-self:center;
    padding:30px;
    
`
const Item=styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
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
const Loads=styled.div`
        position: absolute;
        margin: auto auto;
        z-index: 10;
        background-color: #6e6e6e;
        width: 100%;
        height: 100%;
        opacity: 60%;
        display: flex;
        justify-content: center;
        align-items: center;
        
`
const Loader=styled.div`
     border: 16px solid #f3f3f3;
    border-radius: 50%;
     border-top: 16px solid #3498db;
     width: 120px;
    height: 120px;
    -webkit-animation: spin 2s linear infinite; /* Safari */
     animation: spin 2s linear infinite;
     @keyframes spin {
     0% { transform: rotate(0deg); }
     100% { transform: rotate(360deg); }
}
`
const Logo=styled.img`
    height: 100px;
    width: 100px;
    object-fit: cover;
`
const Header=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap:30px;
    margin-bottom:20px;

`
const IMS=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export default function SignUp(props) {
    
    const [name,setName]=useState("");
    const [pass,setPass]=useState("");
    const dispatch=useDispatch();
    const[loading,setLoading]=useState(false);
    const {currentUser}=useSelector(state=>state.users);
    const navigate=useNavigate();

    console.log("WHER THE FUCK ");
    console.log(currentUser,"wtf");
    
    const handleLogin=async(e)=>{
       console.log("clickin");
       dispatch(loginStart());
       setLoading(true);
        try{
        console.log("LOGGIN IN ");
        const res=await axiosInstance.post('/auth/signin',{name,password:pass});
        console.log(res.data,"RESPOND");
        if(res.data=="incorect"){
            alert("Wong Password!");
           
        }
        dispatch(loginSuccess(res.data._doc));
        setLoading(false);
        navigate('/');
        }catch(er){
            
        }
    }
   
    return (
       <Container>
            {loading && <Loads><Loader/></Loads>}
            <Login> 
                
                
                <Header>
                <Logo src="https://dgm.gov.bt/MineralPortal/landingpage/images/2.png"/>
                <IMS>
                <h2>Information Managment System</h2>
                
                </IMS>
                </Header>
                <Item>
                    <Text>Username : </Text>
                    <Input placeholder='Username' onChange={(e)=>setName(e.target.value)}></Input>
                </Item>
                
                <Item>
                    <Text>Password : </Text>
                    <Input type="password" onChange={(e)=>setPass(e.target.value)} placeholder='email'></Input>
                </Item>
            
                {console.log(currentUser)}
               
                <Btm>
                    <Button onClick={handleLogin}>Sign In</Button>
                </Btm>
                
                
                    
                
            </Login>

        </Container>
    )
}
