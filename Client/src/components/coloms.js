import { width } from "@mui/system";
import DocumentsDisplay from './DocumentsDisplay';
export const Coloms=[
    {
        Header:'Name',
        accessor:'name',
        width:45
    },
    {
        Header:'Dispatched Amount',
        accessor:'amountDeposited',
        width:45
    },
    {
        Header:'Date Deposited',
        accessor:'dateDeposited',
    
    },
    {
        Header:'year',
        accessor:'year',
        Cell: tableProps  => (
            
            <div><a  href={tableProps.row.original.img} target="_blank">Reciept File</a></div>
        )
       
    },
    

]