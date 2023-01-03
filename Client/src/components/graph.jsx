import React, { useEffect } from 'react'
import {
    CartesianGrid,
    Legend,
    Line,
    Label,
    LineChart,
    Tooltip,
    XAxis,
    YAxis,
  } from "recharts";
  
  
const data =["Jan","Feb","Mar","April","May","June","July","Aug","Sept","Oct","Nov","Dec"];
  
export default function Graph({dispatch}) {
    useEffect(()=>{
        if(dispatch)
        for(let i=0;i<dispatch.length;i++){
            dispatch[i].month=data[i];
        }
    },[dispatch]);

    
    return (
        <LineChart width={600} height={300} data={dispatch}>
      {/* <Line type="monotone" dataKey="react" stroke="#2196F3" strokeWidth={3} /> */}
      <Line
        type="monotone"
        dataKey="amount"
        stroke="#2935e6"
        strokeWidth={3}
      />
      {/* <Line type="monotone" dataKey="vue" stroke="#FFCA29" strokeWidth={3} /> */}
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="month"/>
      
      <YAxis>
      <Label
            position="insideLeft" 
                style={{
                    textAnchor: "middle",
                    marginLeft:"30px",
                    
                    fontSize: "130%",
                    
                    fill: "black",
                }}
            angle={-90} 
            value="Production(MT)"/>

      </YAxis>
      
      <Tooltip />
      <Legend />
    </LineChart>
    )
}
