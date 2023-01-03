import React, { useState,useEffect } from 'react'
import styled from 'styled-components'
import Sidebar from './../components/Sidebar';
import Header from './../components/Header';
import MineCard from '../components/MineCard';
import AddRoyalty from '../components/addRoyalty';
import AddDispatch from '../components/addDispatch';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { positions } from '@mui/system';
import { ECDH } from 'crypto';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import SearchIcon from '@mui/icons-material/Search';
import { useLocation } from 'react-router-dom';
import { Worker } from '@react-pdf-viewer/core';
import { axiosInstance } from '../utils/config';
import DocumentsDisplay from './../components/DocumentsDisplay';
import dateFormat, { masks } from "dateformat";
import Graph from '../components/graph.jsx';
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
    position: relative;
    
`
const Body=styled.div`
    display: flex;
    flex-wrap: wrap;
`
const Img=styled.img`
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 20px;
    margin-top: 10px;
`
const Slider=styled.div`
    position: relative;
    
`
const Arrow=styled.div`
    position:absolute;
    top:185px;
    background-color: #868686;
    opacity: 80%;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    margin-left: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover{
        background-color: #1d1c1c;
    }

`
const RArrow=styled.div`
    position:absolute;
    top:185px;
    right:10px;
    background-color: #868686;
    opacity: 80%;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    margin-right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover{
        background-color: #1d1c1c;
    }

`

const BasicDetails=styled.div`
    padding: 15px;
    
`
const Text=styled.h4`
    font-size: 15px;
    font-weight: 400;
    color:black;
`
const Ins=styled.h3`
    margin-bottom: 20px;
`
const Splice=styled.div`
   margin-top: 0px;
 
   margin-left: 10px;
   padding:20px;
   display: flex;
   flex-wrap: wrap;
    gap:40px;
`
const Viz=styled.div`
    display: flex;
    padding:20px;
    justify-content: center;
    margin-right:40px;
    align-items:center;
`
const Production=styled.div`
   
    display: flex;
    justify-content: center;
    background-color: #c9c9c968;
    align-items: center;
    margin-bottom: 50px;
    flex-direction: column;
    padding-bottom: 20px;
    padding-top: 20px;

`
const TableWrap=styled.div`
    display: flex;
    flex-direction: column;
    background-color: #6fe9ff6e;
    border-radius: 12px;
    padding:10px;
    width: 80%;
    
`
const Head=styled.div`
    display: flex;
    color:white;
    align-items: center;
    background-color: #808080b2;
    border:1px solid white;
    
`
const Col=styled.div`
    flex:6;
    font-size: 18px;
    padding:5px;
    border:1px solid white;
`
const Sl=styled.div`
    flex:1;
    font-size: 18px;
    padding:5px;
    border:1px solid white;
`

const TableRow=styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
`
const TableRowDepo=styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 30px;
    margin-top: 5px;
    margin-bottom: 5px;
    
`
const TableData=styled.div`
    flex:6;
    padding:5px;
    border:1px solid white;
    border-bottom: 0px;
    height: 28px;
    overflow: hidden;
`
const TableDataSl=styled.div`
    flex:1;
    height: 28px;
    overflow: hidden;
    padding:5px;
    border:1px solid white;
    border-bottom: 0px;
`
const Moreoption=styled.div`
    border-radius: 50%;
    object-fit: cover;
    

`
const AddDispatchButton=styled.div`
    border-radius:12px;
    background-color: #51ceff;
    align-self: flex-start;
    height: 30px;
    width:100px;
    background-color: #6ffffa;
    cursor: pointer;
    &:hover{
        background-color: #20d2fe;
    }
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2%;
    margin-left: 10%;

    
`
const YearDiv=styled.div`
padding:30px;
    display:flex;
    gap:30px;
    margin-left: 8%;
    align-self: flex-start;
    align-items: center;
    
`
const Search=styled.div`
    height: 40px;
    width: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #6ffffa;
    cursor: pointer;
    &:hover{
        background-color: #20d2fe;
    }
`
const YrInput=styled.input`
    height: 30px;
    width: 100px;
   
    border-radius: 12px;
`
const AddRoyaltyBtn=styled.div`
    height:20px;
    width: 90px;
    background-color: #6ffffa;
    background-color: #6ffffa;
    margin-right: 20px;
    cursor: pointer;
    &:hover{
        background-color: #20d2fe;
    }
    border:1px solid black;
    align-self: flex-end;
    padding:5px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
`
const FileDisplay=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #faa23e26;
    
    height: 120px;
    padding:25px;
`
const FileDisplayInn=styled.div`
    display: flex;
    justify-content: center;
   
    align-items: center;
    gap:40px;
    padding:20px;
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
  font-family: "Space Grotesk",-apple-system,system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  font-size: 15px;
  font-weight: 500;
  line-height: 24px;
  margin: 0;
  width: 120px;
  height: 30px;
  min-height: 20px;
  min-width: 40px;
  padding: 10px 20px;
  position: relative;
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
const CreateDiv=styled.div`
width: 100%;
height: 100vh;
position: fixed;
top: 20px;
left: 0;
background-color: rgba(0,0,0,0.7);
display: flex;
justify-content: center;
align-items: center;
z-index: 1000;
`
const BTN=styled.div`
width: 25px;
z-index: 20;
height: 25px;
border-radius: 50%;
background-color: red;
color: #fff;
display: flex;
justify-content: center;
align-items: center;
font-size: 14px;
font-weight: 600;
cursor: pointer;
position: absolute;
top: -15px;
right: -15px;
font-family: 'Raleway', sans-serif;
z-index: 10;
`
const Card=styled.div`
  width: 500px;
     
  height: 500px;
  background-color: #42424201;
  position: relative;
  display: flex;
  margin: auto auto ;
`
const MONTH=["January","Feb","March","April","May","June","July","August","September","October","November","Devember"];

export default function Mine(props) {
    
    
    const [detail,setDetail]=useState([0,0,0,0,0,0,0,0,0,0,0,0]);
    

    const handleClick=(indx)=>{

        setDetail((dat)=>({
            ...dat,
            [indx]:!dat[indx],
         }))
    }
    const handleSerach=()=>{
        SearchDat();
    }
   
    
    const path=useLocation().pathname.split('/')[2];
    const [quarry,setQuarry]=useState();
    const [dispatch,setDispatch]=useState();

    const [edit,setEdit]=useState(false);
    const [year,setYear]=useState(2022);
    const [openRM,setOpen]=useState(false);
    const [deposits,setDeposits]=useState([]);


    const [MLAOPEN,setMLAOPEN]=useState(false);
    
    const [reload,setReload]=useState(0);
    console.log(openRM);
    // i need to load the dispatch data lso 
    const handleAddRoyalty=async(index)=>{
        //month==index
        //year =yera
        //name=quarry
        try{
            await axiosInstance.get('/levies/addRoyalty/',{name:quarry.name,Year:year,month:index,amount:123});
        }catch(er){
            
        }

    }
    const SearchDat=async()=>{
        console.log("sarching");
        try{
        const dis=await axiosInstance.get(`/dispatch/getDispatch/${path}?year=${year}`);
      
        if(dis.data==null){
            setDispatch(null);
        }else{
        setDispatch(dis.data.Month);
        }
        console.log("NOW SET AS ",dispatch);
        }catch(er){
            console.log(er);
        }
    }
    //let closingBal=([0,0,0,0,0,0,0,0,0,0,0,0]);
    const [clo,setClo]=useState([0,0,0,0,0,0,0,0,0,0,0,0]);
    
    useEffect(()=>{
        console.log("USEEFEFCT");
        
        
        const fetch=async()=>{

            try{
                const gg=await axiosInstance.get(`/quarry/getquarry/${path}`);
                const dis=await axiosInstance.get(`/dispatch/getDispatch/${path}?year=${year}`);
                const depo=await axiosInstance.get(`/levies/getRM/${path}?year=${year}`);
                setQuarry(gg.data);
                setDispatch(dis.data.Month);
                setDeposits(depo);
                
                console.log(quarry);
                
            }catch(er){
               
                console.log(er);
            }
        }
        fetch();
        
        
    },[path,reload]);
    useEffect(()=>{
        const getClosingBal=()=>{
           setClo([0,0,0,0,0,0,0,0,0,0,0,0]);   
            console.log("CALCULARINT CLOSING BAL",deposits.data," and ",dispatch);
            console.log(typeof deposits.data);
            let bal=0;
            if(deposits.data!=null){
            deposits.data.map((depo,idx)=>{
                const month=depo.month;
                setClo((datas)=>({
                    ...datas,
                    [month]:(datas[month]+depo.amountDeposited),
                 }));
                  console.log(clo);
            });
            }
            if(dispatch!=null){
                console.log("THIS IS DISPATCH ",dispatch);
                console.log(typeof dispatch);
                let prev=0;
                dispatch.map((ins,id)=>{
                    const month=id;
                    const amnt=ins.amount;
                    console.log(ins,"THIS IS A DISPATCH INSTACE prev val",prev);
                    
                    setClo((datas)=>({
                        ...datas,
                        [month]:(datas[month]+(month>=1?datas[month-1]:0)-ins.amount),
                     }));
                     console.log(clo,"AFTER DEDUCTING");
                     prev+=clo[id];

                })
                // dispatch.map((disp,idx)=>{
                //     const month=idx;
                    // setDispatch((datas)=>({
                    //     ...datas,
                    //     [month]:(datas[month]-disp.amount),
                    //  }));
                //       console.log(clo);
                // });
            }
    
    
            
    
        }
        getClosingBal();
    },[deposits,dispatch,reload]);
    console.log(quarry?.leasePeriod,"DISSSSSSSS");
    const handleAddDis=()=>{
        
        if(dispatch?.length>=12){
            alert("Only 12 months in a year!!!");
            return;
        }
        setEdit(!edit);
    }
   
    return (
        <Container>
        <Sidebar/>
        
        <Wrapper>
        {edit && 
        <CreateDiv>
        <Card>
        <BTN onClick={(e)=>setEdit(false)}>X</BTN>
        <AddDispatch quarry={quarry} Year={year} setReload={setReload} setEdit={setEdit}/>
        </Card>
        </CreateDiv>
        }
        <Header/>
        
        {quarry?<>
          <Top>
           
            <Title>{quarry.name} Stone Quarry</Title>
            <Slider>
                <Arrow>
                <ArrowBackIosIcon style={{color:'white'}}/>
                </Arrow>
                <RArrow>
                <ArrowForwardIosIcon style={{color:'white'}}/>
                </RArrow>
            <Img src={quarry.img}></Img>
            </Slider>
          </Top>
          <BasicDetails>
                
                <Ins>Focal Inspector: test1</Ins>
             <Splice>
                
              <Text>LeaseHolder : {quarry.leaseHolder}</Text>
             
              <Text>Material Mines :  {quarry.Material}</Text>
              
              <Text>Lease Term :working</Text>
              <Text>EC Validity : 04/10/2022-05/5/2026</Text>
              <Text>Employemnt : 234</Text>
            </Splice>
            <Splice>
              
              <Text>Contact of Promoter : 78956465</Text>
              <Text>Email : test@test.com</Text>
              
            </Splice>
              
          </BasicDetails>  
        
        <FileDisplay>
        <h3>Documents</h3>
        <FileDisplayInn>
        <ButtonTemplate onClick={()=>setMLAOPEN(true)}>View MLA</ButtonTemplate>
         {MLAOPEN && 
          <DocumentsDisplay MLA={quarry.MLA} setMLAOPEN={setMLAOPEN}/>}
          <ButtonTemplate onClick={()=>setMLAOPEN(true)}>View EC</ButtonTemplate>
         {MLAOPEN && 
          <DocumentsDisplay MLA={quarry.MLA} setMLAOPEN={setMLAOPEN}/>}
          </FileDisplayInn>
        </FileDisplay>



          
          <Production>
          <YearDiv>
            <h4>Enter Year :</h4>
            <YrInput type='text' value={year} placeholder='Enter Year' onChange={(e)=>setYear(e.target.value)}></YrInput>
            <Search onClick={()=>{handleSerach()}}><SearchIcon/></Search>
           </YearDiv>
           <Viz>
           <Graph dispatch={dispatch}/>
           </Viz>
          <TableWrap>
            
            <Head>
                <Sl>Sl</Sl>
                <Col>Month</Col>
                <Col>Amount Dis</Col>
                <Col>Dispatch No</Col>
                <Col>Royalty Closing</Col>
            </Head>
          
            
            {dispatch?.map((ok,index)=>(
                
           
                <>
                <TableRow>
                <TableDataSl>
                
                <Moreoption onClick={(e)=>{handleClick(index); setOpen(false);}}>
                <KeyboardArrowDownIcon />
                </Moreoption>
                </TableDataSl>
                <TableData>{MONTH[index]}</TableData>
                <TableData>{ok.amount}</TableData>
                <TableData>{ok.dispatchNo}</TableData>
                <TableData>{clo[index]}</TableData>
                </TableRow>
                        {detail[index]? (
                        <>
                    
                        Royalty Deposits
                        {console.log(deposits,"HERE IN COMPOENENT")}
                        {deposits.data.map((dep)=>{
                            if(dep.month==index){
                            return <TableRowDepo>
                            <span>Date : {dep.dateDeposited}  Amount :{dep.amountDeposited} Reciept No: {dep.recieptNo} </span>
                            </TableRowDepo>
                            }
                        })             
                        }   
                        {openRM && 
                        <CreateDiv>
                            <Card>                        
                                <BTN onClick={(e)=>setOpen(false)}>X</BTN>
                                <AddRoyalty name={quarry.name} Year={year} Month={index} setReload={setReload} setOpen={setOpen}/>
                            </Card>
                        </CreateDiv>
                        }
                        
                        <AddRoyaltyBtn onClick={(e)=>setOpen(true)} > Add Deposit</AddRoyaltyBtn>

                        </>)    
                    :null}
                    
                </>
                 
            ))}
           
          
           
            
            </TableWrap>
            <AddDispatchButton onClick={handleAddDis}  >
                Add Record
            </AddDispatchButton> 
          </Production>
            
            
          </>:<h1>Loading</h1>}
        </Wrapper>
        
        </Container>
    )
}
