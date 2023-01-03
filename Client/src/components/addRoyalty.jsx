import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { axiosInstance } from '../utils/config';
import uploadFile from './uploadFile.js';
import dateFormat, { masks } from "dateformat";
import Bar from './Bar';
import FormInput from './FormInput';

    const Container=styled.div`
    position: absolute;
    
    

    height:360px;
    width: 100%;
    background-color: #868686e1;
    border-radius: 10px;
    z-index: 10;
    `
  
    const Wrapper=styled.div`
        padding:15px;
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
   
    margin-left: 40%;

    
`
export default function AddDispatch({name,Year,Month,setReload,setOpen}) {
    
    
   
    const [year,setYear]=useState();
    const [month,setMonth]=useState();
    //month should be automatical fetched 

    const [amount,setAmount]=useState();
    const [dispatchNo,setDN]=useState();
    const [file,setFile]=useState();
    const [date,setDate]=useState();
    const [link,setLink]=useState();
    const [progres,setProgres]=useState(0);
    useEffect(()=>{
        console.log("wtf");
        file && uploadFile(file,"royaltySlip",setLink,setProgres);
    },[file]);

    const handleSubmit=async(e)=>{
        console.log("ADDING ROYALTY ");
        try{
            
            setMonth(month);
            
            console.log(date);
            const gg=await axiosInstance.post('/levies/addRoyalty',{year:Year,month:Month,name:name,amount,recieptNo:dispatchNo,date:date,link:link});
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
                <H2>Add Royalty for {Month} month and {Year} : {name}</H2>
                <Line>
                    <Title>Amount in MT :</Title>
                    <FormInput type="number" errorMessage="Required Number" required placeholder='amount of materials dispatch in a month in MT' onChange={(e)=>setAmount(e.target.value)}></FormInput>
                </Line>
                <Line>
                    <Title>Deposit Date :</Title>
                    <FormInput errorMessage="Required Date" required onChange={(e)=>setDate(dateFormat(e.target.value,"d/m/yyyy"))} type="date" ></FormInput>
                </Line>
                <Line>
                    <Title>Deposit No :</Title>
                    <FormInput errorMessage="Required Date" required  type="text" onChange={(e)=>setDN(e.target.value)} placeholder="Dispatch Letter No"></FormInput>
                </Line>
                <Line>
                    <Title>Reciept :</Title>
                    <FormInput errorMessage="Required Date" required  type="file" onChange={(e)=>setFile(e.target.files[0])}></FormInput>
                </Line>
                <Bar done={progres}/>
                <SubmitBtn onClick={handleSubmit}>Submit</SubmitBtn>
                
            </Wrapper>
        </Container>
    )
}
