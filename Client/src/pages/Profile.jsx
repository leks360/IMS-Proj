import React, { useEffect, useState } from 'react'
import BasicTable from '../components/BasicTable'
import Sidebar from '../components/Sidebar'
import styled from 'styled-components'
import Header from '../components/Header'
import { axiosInstance } from '../utils/config'
import { useLocation } from 'react-router-dom';
const Container=styled.div`
    display: flex;
    background-color: #41424221;
`
const Wrapper=styled.div`
    flex:5;
`
const Body=styled.div`
    padding:5px;
`
const Top=styled.div`
    padding: 30px;
    display: flex;
    gap:20px;
`
const Img=styled.img`
    height:200px;
    width: 200px;
    border-radius: 50%;
    object-fit: cover;
    border:5px solid #70dee2;
`
const Info=styled.div`
    margin-top: 10px;
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    gaP:20px;
`
const Text=styled.h4`
font-size: 16px;
font-weight: 400;
    
`

export default function Levies(prop) {
    const path=useLocation().pathname.split('/')[2];
    console.log(path);
    const [user,setUser]=useState(0);
    const [site,setSite]=useState([]);
    useEffect(()=>{
        const fetch=async()=>{
            const user=await axiosInstance.get(`/user/getuser/${path}`);
            console.log(user);
            setSite(user.data.quarryIncharge);
            setUser(user.data);
        }
        fetch();
        
    },[path]);
    console.log(user,"USER");
    return (
        <>
        
        <Container>
        <Sidebar/>
        <Wrapper>
        <Header/>
         <Body>
            <Top>
                <Img src="https://aiu.edu.eg/wp-content/uploads/2021/12/no-profile-pic.png"></Img>
                <Info>
                    
                    <Text>NAME : {user?.name}</Text>
                    <Text>Designation : {user.role}</Text>
                    <Text>Position Level : P4A</Text>
                    <Text>Site Assigned: </Text>
                    {site.map((sit)=>{
                       return <Text>{sit} </Text> 
                    })}
                    <Text>Contact :{user?.contact}</Text>
                    <Text>Email : {user.email}</Text>
                </Info>
            </Top>
         </Body>
        </Wrapper>
        
        </Container>
        </>
    )
}
