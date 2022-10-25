import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { axiosInstance } from '../utils/config';
import uploadFile from './uploadFile.js';
import dateFormat, { masks } from "dateformat";


import Bar from './Bar';
    const Container=styled.div`
    position: absolute;
   
    

    height:100%;
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
export default function AddDispatch({name,Year,Month,setReload,setOpen}) {
    
    
   
    const [year,setYear]=useState();
    const [month,setMonth]=useState();
    const [amount,setAmount]=useState();
    const [dispatchNo,setDN]=useState();
    const [section,setSec]=useState();
    const [file,setFile]=useState();
    const [date,setDate]=useState();
    const [link,setLink]=useState();
    const [progres,setProgres]=useState(0);
    useEffect(()=>{
        console.log("wtf");
        file && uploadFile(file,"Penalty",setLink,setProgres);
    },[file]);

    const handleSubmit=async(e)=>{
        console.log("ADDING ROYALTY ");
        try{
            
            setMonth(month);
            
            console.log(date);
            const gg=await axiosInstance.post('/penalty/addPenalty',{name:name,amount:amount,reason:dispatchNo,date:date,link:link,imposed:section});
            console.log(gg);
            setReload((x)=>x+1);
            setOpen(false);
        }catch(er){
            console.log(er);
        }
    }
    
   
    return (

        
        <Container>
            <Wrapper>
                <H2>Add Penalty For {name} Quarry</H2>
                <Line>
                    <Title>Amount Imposed :</Title>
                    <Input type="text" placeholder='amount of materials dispatch in a month in MT' onChange={(e)=>setAmount(e.target.value)}></Input>
                </Line>
                <Line>
                    <Title>Date Imposed :</Title>
                    <Input onChange={(e)=>setDate(dateFormat(e.target.value,"d/m/yyyy"))} type="date" ></Input>
                </Line>
                <Line>
                    <Title>Reason :</Title>
                    <Input type="text" onChange={(e)=>setDN(e.target.value)} placeholder="Justification"></Input>
                </Line>
                <Line>
                    <Title>Sections :</Title>
                    <Input type="text" onChange={(e)=>setSec(e.target.value)} placeholder="Sections of Act and Reulation"></Input>
                </Line>
                <Line>
                    <Title>Reciept :</Title>
                    <Input type="file" onChange={(e)=>setFile(e.target.files[0])}></Input>
                </Line>
                <Bar done={progres}/>
                <SubmitBtn onClick={handleSubmit}>Submit</SubmitBtn>
            </Wrapper>
        </Container>
    )
}
