import { width } from "@mui/system";
import DocumentsDisplay from './DocumentsDisplay';
export const PenaltyCols=[
    {
        Header:'Name',
        accessor:'name',
        width:45
    },
    {
        Header:'Date',
        accessor:'date',
        width:45
    },
    {
        Header:'Amount Imposed',
        accessor:'amount',
    
    },
    {
        Header:'Reason',
        accessor:'reason',
    
    },
    {
        Header:'Sections',
        accessor:'imposed',
    
    },
    {
        Header:'File',
        accessor:'year',
        Cell: tableProps  => (
            
            <div><a  href={tableProps.row.original.img} target="_blank">Reciept File</a></div>
        )
       
    },
    

]