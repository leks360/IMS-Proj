import { width } from "@mui/system";
import DocumentsDisplay from './DocumentsDisplay';
export const inspectionCols=[
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
        Header:'Observations',
        accessor:'observations',
    
    },
    {
        Header:'Uploaded By',
        accessor:'uploadedBy',
    
    },
    {
        Header:'year',
        accessor:'year',
        Cell: tableProps  => (
            
            <div><a  href={tableProps.row.original.img} target="_blank">Reciept File</a></div>
        )
       
    },
    

]