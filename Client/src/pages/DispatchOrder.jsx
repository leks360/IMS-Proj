import React, { useEffect ,useState} from 'react'
import BasicTable from '../components/BasicTable'
import Sidebar from '../components/Sidebar'
import styled from 'styled-components'
import Header from '../components/Header'
import { axiosInstance } from '../utils/config'
import SearchIcon from '@mui/icons-material/Search';
import AddDo from '../components/addDO.jsx';

const Container=styled.div`
    display: flex;
    background-color: #41424221;
`
const Wrapper=styled.div`
    flex:5;
`
const Inputs=styled.div`
    padding:10px;
    margin-top: 20px;
    margin-left: 60px;
    display: flex;
    gap:15px;
    justify-content: flex-start;
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
const Card=styled.div`
     width: 800px;
     
  height: 500px;
  background-color: #42424201;
  position: relative;
  display: flex;
  margin: auto auto ;
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
    z-index: 10;
`
const Btn=styled.div`
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
  
  right:0px;
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
const Tit=styled.div`
    padding:10px;
    display: flex;
    margin-top: 20px;
    margin-left: 50px;
   
    align-items: center;
    
    text-align: center;
`
const H3=styled.h3`
    font-weight: 600;
    font-size: 20px;
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



export default function Levies(props) {
    const [openCreate,setOpen]=useState(false);
    const [data,setData]=useState([]);
    const [quarryName,setName]=useState([]);
    const [ser,setSer]=useState('none');
    const [page,setPage]=useState(1);
    const [limit,setLimit]=useState(10);
    const [reload,setReload]=useState(0);


    //make A FUNCTION TO CREATE PENALTY DO INSECCTION REPORT AND ALL

    useEffect(()=>{
       const fetch=async()=>{
        
        //const da=await axiosInstance.get('/levies/getAll');
        //getAllPaginated
        const da=await axiosInstance.get(`/do/getAllPaginated/${ser}?page=${page}&limit=${limit}`);
        console.log(da,"FROM THE PAGINATIOn");
        const qq=da.data.results;
        console.log(qq,"THE PAGINATED RESULT");
        setData(qq);
  
        const qwe=await axiosInstance.get('/quarry');
        const kek=qwe.data;
        console.log(kek,"QWE");
        setName(kek);
  
       }
       
       fetch();
       
    },[])
    useEffect(()=>{
        const fetch=async()=>{
            const da=await axiosInstance.get(`/do/getAllPaginated/${ser}?page=${page}&limit=${limit}`);
        console.log(da,"FROM THE PAGINATIOn");
        const qq=da.data.results;
        console.log(qq,"THE PAGINATED RESULT");
        setData(qq);
        }
        fetch();
    },[limit,ser,page,reload]);

    const handleSearch=async()=>{
        const da=await axiosInstance.get(`/levies/getRM/${ser}`);
        const kek=da.data;
        //so i need to paginate it here im guessing
        
        setData(kek);
    }
    console.log("ALL DATANEWJADA",data);

    return (
        <>
        <Container>
        <Sidebar/>
        <Wrapper>
        <Header/>
            <Tit>
                <H3>Dispatch Orders</H3>
            </Tit>
            {openCreate && ser!='none' && 
            <CreateDiv> 
               <Card>
               <BTN onClick={e=>setOpen(false)}>X</BTN>
                <AddDo name={ser} setOpen={setOpen} setReload={setReload}/>
                </Card>
                
            </CreateDiv>}    
            
            <Inputs>
                
                <span> Select Quarry : </span>

                <input onChange={(e)=>{e.target.value==''?setSer('none'):setSer(e.target.value)}}type="text" list="quarry" placeholder='All'/>
               
                <datalist id="quarry">
                { quarryName.map((item)=>(
                    <option>{item.name}</option>
                ))}
                </datalist>
                <Search ><SearchIcon/></Search>
                <ButtonTemplate onClick={(e)=>{ser=='none'?alert("Pl choose Quarry"):setOpen(true)}}>Add Dispatch Order</ButtonTemplate>
            </Inputs>
            
            
        {data!=null &&<BasicTable dataa={data} setLimit={setLimit} setPage={setPage} page={page} which="do"/>}
        </Wrapper>
        
        </Container>
        </>
    )
}
