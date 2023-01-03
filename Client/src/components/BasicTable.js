import React,{useMemo, useState} from 'react'
import {useTable,useGlobalFilter} from 'react-table';
import GlobalFilter from './GlobalFilter';
import Sample from './sample.json';
import {Coloms} from './coloms.js';
import {DoColoms} from './doColoms.js'
import {inspectionCols} from './inspectionCol.js';
import {PenaltyCols} from './penaltyColoms.js'
import './table.css';
import styled from 'styled-components';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import dateFormat, { masks } from "dateformat";
const Container=styled.div`
  padding:30px;
  
  margin-left: 40px;
  margin-right: 40px;
`
const Inputs=styled.div`
    
    margin-top: 25px;
    margin-bottom: 25px;
`
const Selections=styled.div`
    align-self: flex-end;
    padding:5px;
`
const PageSec=styled.div`
    padding:10px;
    display: flex;
    margin-top: 10px;

`
const PG=styled.div`
    height: 32px;
    width: 32px;
    background-color:#b7ebeb;
    &:hover{
        background-color:#3b79ff;
    }
    border:0.5px solid white;
    display: flex;
    justify-content: center;
    align-items: center;
`
export default function BasicTable({dataa,setLimit,setPage,page,which}) {
    

    //cols and data can be imported as  a PROP I THINK RIGHT
    console.log(Sample);
    console.log(dataa,"this is the data"); 
    let col;
    if(which=='levy'){
        col=Coloms;
    }else if(which=='do'){
        col=DoColoms;
    }else if(which=='penalty'){
        col=PenaltyCols;
    }else if(which=="inspection"){
        col=inspectionCols;
    }
    const columns=useMemo(()=>col,[]);
    const data=useMemo(()=>dataa,[]);
    console.log(data,"datapassed");
    
   
    const tableInstance=useTable({
        columns:columns,
        data:dataa
    },useGlobalFilter);
    const {getTableProps,getTableBodyProps,headerGroups,rows,prepareRow,state,setGlobalFilter}=tableInstance;

    const {globalFilter}=state;
    const [pag,setPag]=useState([1,2,3,4,5]);
    const [inc,setInc]=useState(0);
    const [selected,setSelected]=useState(0);
    console.log(pag);
    const handleRight=(e)=>{
        console.log("RIGHT");
        
            setInc(inc+1);
        
        console.log(inc);
    }
    const handleLeft=(e)=>{
        if(inc>0){
            setInc(inc-1);
        }
    }
    const handleSelect=(e)=>{
        //console.log(e.target.innerText,"THIS IS VALUE OF BTN ");
        setSelected(e.target.innerText);
        setPage(e.target.innerText);
    }
    return (
        <Container>
            <Inputs>
                <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/>
            </Inputs>
            <Selections>
            <label for="cars">Show  :  </label>
            <select  onChange={(e)=>setLimit(e.target.value)} name="cars" id="cars">
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="50">50</option>
            </select>
            </Selections>
        <table {...getTableProps()}> 
            <thead>
                {headerGroups.map((headerGroup)=>{
                  return   <tr {...headerGroup.getHeaderGroupProps()}>
                        {
                            headerGroup.headers.map((column)=>{
                              return   <th {...column.getHeaderProps({  style: {width: column.width }})}>{column.render('Header')}</th>
                            })
                        }
                   
                    </tr>    
                })};
                
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row)=>{
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map((cell)=>{
                                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                            })}
                        
                        </tr>
                    )
                    
                })}
                
            </tbody>
        </table>
        <PageSec>
            <PG onClick={handleLeft}><KeyboardDoubleArrowLeftIcon/></PG>
                {
                    pag?.map((pg)=>{
                        return <PG onClick={handleSelect}>{pg+inc}</PG>
                    })
                }
              <PG onClick={handleRight}><KeyboardDoubleArrowRightIcon/></PG>  
        </PageSec>
        </Container>
    )
}
