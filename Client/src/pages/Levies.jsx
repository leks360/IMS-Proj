import React, { useEffect ,useState} from 'react'
import BasicTable from '../components/BasicTable'
import Sidebar from '../components/Sidebar'
import styled from 'styled-components'
import Header from '../components/Header'
import { axiosInstance } from '../utils/config'
import SearchIcon from '@mui/icons-material/Search';


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
const Tit=styled.div`
    padding:15px;
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


export default function Levies(props) {
    
    const [data,setData]=useState([]);
    const [quarryName,setName]=useState([]);
    const [ser,setSer]=useState('none');
    const [page,setPage]=useState(1);
    const [limit,setLimit]=useState(10);
    useEffect(()=>{
       const fetch=async()=>{
        
        //const da=await axiosInstance.get('/levies/getAll');
        //getAllPaginated
        const da=await axiosInstance.get(`/levies/getAllPaginated/${ser}?page=${page}&limit=${limit}`);
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
            const da=await axiosInstance.get(`/levies/getAllPaginated/${ser}?page=${page}&limit=${limit}`);
        console.log(da,"FROM THE PAGINATIOn");
        const qq=da.data.results;
        console.log(qq,"THE PAGINATED RESULT");
        setData(qq);
        }
        fetch();
    },[limit,ser,page]);

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
                <H3>Royalty & Mineral Rent Collections</H3>
            </Tit>
            <Inputs>
                
                <span> Select Quarry : </span>
                            <input onChange={(e)=>{e.target.value==''?setSer('none'):setSer(e.target.value)}}type="text" list="quarry" placeholder='All'/>
                <datalist id="quarry">
                { quarryName.map((item)=>(
                    <option>{item.name}</option>
                ))}
                </datalist>
                <Search ><SearchIcon/></Search>
            </Inputs>
            
        {data!=null &&<BasicTable dataa={data} setLimit={setLimit} setPage={setPage} page={page} which="levy"/>}
        </Wrapper>
        
        </Container>
        </>
    )
}
