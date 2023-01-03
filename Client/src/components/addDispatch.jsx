import React, { useState } from 'react'
import styled from 'styled-components';
import { axiosInstance } from '../utils/config';
import Bar from './Bar';
import FormInput from './FormInput';

    const Container=styled.div`
    position: absolute;
    
    

    height:300px;
    width: 100%;
    background-color: #868686e1;
    border-radius: 10px;
    z-index: 10;
    `
    const Wrapper=styled.div`
        padding:20px;
        display: flex;
        flex-direction: column;
        gap:25px;
    `
    const Line=styled.div`
        display: flex;

    `
    const Title=styled.h3`
       flex:1 ;
       font-weight: 400;
    `
    const Input=styled.input`
        flex:2;
    `
    const H2=styled.h3`
        

    `
    const SubmitBtn=styled.div`
    border-radius:12px;
    border:1px solid black;
    align-self: flex-start;
    height: 30px;
    width:100px;
    background-color: #9ff7e8;
    cursor: pointer;
    &:hover{
        background-color: #20d2fe;
    }
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2%;
    margin-left: 40%;

    
`
export default function AddDispatch({quarry,Year,setReload,setEdit}) {
    
    console.log("IN ADD DISPATCH COMPONENT",Year);
   
    const [year,setYear]=useState();
    const [month,setMonth]=useState();
    //month should be automatical fetched 
    
    
    const [amount,setAmount]=useState();
    const [dispatchNo,setDN]=useState();
    const [file,setFile]=useState();
    
    const handleSubmit=async(e)=>{
        try{
            
            setMonth(1);
            const gg=await axiosInstance.post('/dispatch/addDispatch',{year:Year,month,name:quarry.name,amount,dispatchNo});
            console.log(gg);
            setReload((prev)=>prev+1);
            setEdit(false);
        }catch(er){
            console.log(er);
        }
    }
    return (

        
        <Container>
            <Wrapper>
                <H2>Record for ..month/year : X SQ</H2>
                <Line>
                    <Title>Amount in MT :</Title>
                    <FormInput required errorMessage={"Required Number"} type="number" placeholder='amount of materials dispatch in a month in MT' onChange={(e)=>setAmount(e.target.value)}></FormInput>
                </Line>
                <Line>
                    <Title>Dispatch No :</Title>
                    <Input type="text" onChange={(e)=>setDN(e.target.value)} placeholder="Dispatch Letter No"></Input>
                </Line>
                <Line>
                    <Title>Dispatch Record :</Title>
                    <Input type="file" onChange={(e)=>setAmount(e.taget.files[0])}></Input>
                </Line>
                
                <SubmitBtn onClick={handleSubmit}>Submit</SubmitBtn>
            </Wrapper>
        </Container>
    )
}
