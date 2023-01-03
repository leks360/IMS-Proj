import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import MineCard from '../components/MineCard';
import { Link, useLocation } from 'react-router-dom';
import { axiosInstance } from '../utils/config';
import {useDispatch,useSelector} from 'react-redux';
const Container=styled.div`
    display: flex;
    position: relative;
    background-color: #41424221;
`
const Wrapper=styled.div`
    flex:5;
    
`
const Title=styled.h1`
    font-weight: 300;
`
const Top=styled.div`
    margin: 15px;
    display: flex;
    justify-content: space-between;
`
const Body=styled.div`
    display: flex;
    flex-wrap: wrap;
`
const Addquarry=styled.div`
    height:40px;
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 13px;
    margin-right: 100px;
    background-color: #57ebff;
    color:black;
    &:hover{
        background-color: #2dabff;
        
    }
`
const ButtonTemplate=styled.div`
  background-color: #0a6bff;
  border-radius: 20px;
  border: 0;
  box-shadow: rgba(1,60,136,.5) 0 -1px 3px 0 inset,rgba(0,44,97,.1) 0 3px 6px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display:flex;
  align-self: flex-end;
  
  font-family: "Space Grotesk",-apple-system,system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  font-size: 15px;
  font-weight: 500;
  line-height: 24px;
  margin: 0;
  z-index: 1;
  width: 190px;
  height: 50px;
  min-height: 20px;
  min-width: 40px;
  padding: 10px 20px;
  position:relative;
  
  right:50px;
  text-align: center;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  
  text-align: center;
  justify-content: center;
  align-items: center;
  transition: all .2s cubic-bezier(.22, .61, .36, 1);
  &:hover{
    background-color: #065dd8;
  transform: translateY(-2px);
  }
  @media (min-width: 768px) {
  .button-66 {
    padding: 16px 44px;
    min-width: 150px;
  }
}
`
export default function Mines(props) {
    
    const [quarry,setQuarry]=useState([]);
   useEffect(()=>{
    const fetch=async()=>{
        const quarries=await axiosInstance.get('/user/all');
        setQuarry(quarries.data);
    };
    fetch();
   },[]);
   const {currentUser}=useSelector(state=>state.users);
   console.log(quarry,"wtf");
    return (
        <Container>
        <Sidebar/>
        <Wrapper>
        <Header/>
            <Top>

                <Title>Staffs Of the Office </Title>
                {/* {currentUser.role=='RC'?(<Link to="/addquarry">
                <ButtonTemplate >Add Quarry</ButtonTemplate>
                </Link>):
                <ButtonTemplate onClick={(e)=>alert("Only RCs can Add Quarry")}>Add Quarry</ButtonTemplate>} */}
                
            </Top>
            <Body>
            {quarry.map((q)=>{
                    return <>
                     <Link to={`/profile/${q.name}`} style={{textDecoration:"none"}}>
                    <MineCard style={{color:"white"}} quarry={q} where="profile"/>
                    </Link>
                    </>
            })};
            
            
            </Body>
        </Wrapper>
        
        </Container>
    )
}
