import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux';
import { axiosInstance } from '../utils/config';
import { logout } from '../redux/userSlice';



const Container=styled.div`
    z-index: 100;
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #407af7;
    gap:10px;
`
const Banner=styled.div`
    display: flex;
    flex-direction: column;
    gap:10px;
    margin-right: 50px;
    flex:7;
    justify-content: center;
    align-items: center;
`
const Banner1=styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 15px;
    gap:10px;
    flex:1;
    justify-content: center;
    align-items: center;
`
const ProfileDrop=styled.div`
    position:absolute;
    border-radius: 12px;
    z-index: 20;
    padding: 10px;
    width: 110px;
    top:80px;
    right:12px;
    background-color: #c3c5c3dd;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    color:black;
    font-weight: 300;
`
const ProfileDropItem=styled.div`

&:hover{
    border-radius: 12px;
    background-color: #585858;
   

}
height: 30px;
`
const Title=styled.h1`
    color:#ffffff;
    font-size: 25px;
    font-weight: 500;
`
const IMS=styled.h3`
     color:white;
     font-weight: 400;
`
const Hr=styled.hr`
    
`
const UserSec=styled.div`
    flex:1;
    &:hover{
        border-radius: 12px;
        background-color: #585858;
    }
`
const Profile=styled.div`
    display: flex;
    padding:10px;
    justify-content:space-between;
    gap:20px;
    align-items: center;
    color:white;
    width: 110px;
    margin-right: 15px;
    

`
const Propic=styled.img`
    height: 32px;
    width: 32px;
    border-radius: 50%;
    object-fit: cover;
    border:2px solid #3b3b3be6;
`
const SignIn=styled.div`
    height: 40px;
    width: 90px;
    background-color:#00FFD1;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    display:flex;

`
const name=styled.h3`
    color:white;
    font-weight:500;
    text-decoration: none;
`

export default function Header(props) {
    
    const [drop,setDrop]=useState(0);
    const {currentUser}=useSelector(state=>state.users);
    const dispatch=useDispatch();
    
    const handleLogout=async()=>{
        try{
            await axiosInstance.post('/auth/logout');
            dispatch(logout());
        }catch(er){

        }
    }
    return (
     <Container>
         <Banner1>
        
        <IMS>Wangdue RO</IMS>
        </Banner1>
        <Banner>
        <Title>Department Of Geology and Mines  </Title>
        
        <IMS>Information Management System (Unofficial) </IMS>
        </Banner>
        <UserSec >
            <Profile onClick={(e)=>setDrop(!drop)}  >
                
                {currentUser?(
                <>
                    <Profile>
                    <Propic src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"/>
                     <name>{currentUser.name}</name>
                </Profile>
                {drop?
                <ProfileDrop>
                <ProfileDropItem>
                    <Link to={`/profile/${currentUser.name}`} style={{textDecoration:"none"}}>
                    Profile
                    </Link>
                </ProfileDropItem>
                <ProfileDropItem onClick={handleLogout} >
                    LogOut
                </ProfileDropItem>
                </ProfileDrop>:
                null
                }
                </>
                ):( <Link to="/signin"><SignIn>Login</SignIn> </Link>)}
               
               

            </Profile>
        </UserSec>
     </Container>   
    )
}
