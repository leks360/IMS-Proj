import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from '../firebase.js';
import React, { useEffect, useState } from 'react'
import BasicTable from '../components/BasicTable'
import Sidebar from '../components/Sidebar'
import styled from 'styled-components'
import Header from '../components/Header'
import FormInput from '../components/FormInput.jsx';
import { axiosInstance } from '../utils/config';
import dateFormat, { masks } from "dateformat";
const Container=styled.div`
    display: flex;
    background-color: #41424221;
`
const Wrapper=styled.div`
    flex:5;
`
const InputWrapp=styled.div`
    display: flex;
    flex-direction: column;
    gap:20px;
    margin-left: 30px;
    padding:20px;
    width: 500px;
`
const Slide=styled.div`
    display: flex;
    gap:40px;
    height:50px;
`
const Holder=styled.h3`
    flex:1;
    font-weight: 400;
`
const Input=styled.input`
    flex:2;
    height: 30px; 
    &:invalid[focused="true"]{
        border: 1px solid red;
    }

    &:invalid[focused="true"] ~ span{
        display: block;
    }
`
const Span=styled.span`
     
    font-size: 12px;
    padding: 3px;
    color: red;
    display: none;
`
const InputSas=styled.div`
    flex:2;
`
const Button=styled.div`
    width:150px;
    margin-top: 50px;
    align-self: center;
    border-radius: 12px;
    background-color: #6ffffa;
    text-align: center;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content:center;
    cursor: pointer;
    &:hover{
        background-color: #20d2fe;
    }

`
export default function AddQuarry(props) {
    
    const [name,setName]=useState("");
    const [lease,setLease]=useState("");
    const [img,setImg]=useState();
    const options = [
        'Construction Material', 'Granite', 'Coal','Gold','Diamond'
    ];
    const DzongkhaOp = [
        'Wangdue', 'Punakha', 'Tsirang','Gasa',
        ];
    
    const defaultOption = options[0];
    const defaultOption1 = DzongkhaOp[0];
    const [file,setFile]=useState();
    const [mat,setMat]=useState('Construction Material');
    const [dzo,setDzo]=useState('Wangdue');
    const [progress,setProgess]=useState(0);
    const [leasePeriod,setLeasePeriod]=useState([]);
    const [MLA,setMLA]=useState();
    const [EC,setEC]=useState();
    const [ECLINK,setECLINK]=useState();
    const [link,setLink]=useState();
    const [MLALINK,setMlaLink]=useState();
    const handleDrop=(e)=>{ 
        console.log(e);
        setMat(e.value);
    }
    const handleDzo=(e)=>{
        console.log(e);
        setDzo(e.value);
    }
    useEffect(()=>{
        file && uploadFile(file,"images");
    },[file]);
    useEffect(()=>{
        MLA && uploadFile(MLA,"MLA");
    },[MLA]);
    useEffect(()=>{
        EC && uploadFile(EC,"EC");
    },[EC]);
       
    
    const handlecreate=async(e)=>{
        console.log("creating quarry",mat);
        console.log(MLALINK);
        console.log("IMAGE OF LINK",link);
        try{
            await axiosInstance.post('/quarry/addQuarry',{name:name,
                leaseHolder:lease,
                Material:mat,
                location:dzo,
                concernInspector:"Unknown",
                leasePeriod:leasePeriod,
                img:link,
                MLA:MLALINK,
                EC:ECLINK}
                );
        }catch(er){
            console.log(er)
            console.log("cannot post to create quarry");
        }
        
    }
    console.log(leasePeriod);
    const uploadFile=(file,fileType)=>{
        console.log(file,"FILE SIZE");
        if(file.size>1024*1024*5){
            console.log("sorry it cant be uploaded");
            alert("File size must under 2MiB!");
            
            
        }else{
        const storage = getStorage(app);
        const filename=new Date().getTime()+file.name;
        const storageRef = ref(storage, `${fileType}/` +filename);
        const uploadTask = uploadBytesResumable(storageRef, file);
        
    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on('state_changed',
    (snapshot) => {
        if(snapshot.totalBytes>1024*1024*5){
            console.log("THE FILE CANNOT BE UPLOADE");
            
        }else{
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            setProgess(progress);
            switch (snapshot.state) {
            case 'paused':
                console.log('Upload is paused');
                break;
            case 'running':
                console.log('Upload is running');
                break;
            }
        }}, 
    (error) => {console.log("There is an error",error.message)}, () => {
        // Upload completed successfully, now we can get the download URL
            console.log("uploaded");
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            if(fileType=='images'){
                setLink(downloadURL);
            }
            if(fileType=='MLA'){
                setMlaLink(downloadURL);
            }
            if(fileType="EC"){
                setECLINK(downloadURL);
            }
            
            console.log(downloadURL);
        });
    }
    )}
    }
    return (
        <>
        
        <Container>
        <Sidebar/>
        <Wrapper>
        <Header/>
        
        <InputWrapp>
        
        <Slide>
        <Holder>Name</Holder>
        
        {/* <Input type="text"  errorMessage={"Please enter valid name"} placeholder='name of Mine' onChange={(e)=>setName(e.target.value)} required >
        </Input> */}

        <FormInput placeholder='name of Mine' onChange={(e)=>setName(e.target.value)} placeHolder="name" type="text" required="true" errorMessage={"Please enter valid name"}></FormInput>
        
        </Slide>
        <Slide>
        <Holder>LeaseHolder</Holder>
        {/* <Input type="text" placeholder='name of LeaseHolder'onChange={(e)=>setLease(e.target.value)}/> */}
        <FormInput placeholder='name of LeasHolder' onChange={(e)=>setLease(e.target.value)} placeHolder="name" type="text" required="true" errorMessage={"Please enter valid Leaseholder"}></FormInput>
        </Slide>
        <Slide>
        <Holder>Lease Term </Holder>
        <FormInput errorMessage="Pls enter date" type="date" width="100px" onChange={(e)=>setLeasePeriod((prev)=>[...prev,dateFormat(e.target.value,"d/m/yyyy")])} required="true"/>
        <FormInput errorMessage="Pls enter date" type="date" width="100px" onChange={(e)=>setLeasePeriod((prev)=>[...prev,dateFormat(e.target.value,"d/m/yyyy")])} required="true"/>
        </Slide>
        <Slide>
        <Holder>Material </Holder>
        <InputSas>
        <Dropdown options={options} value={defaultOption} onChange={handleDrop} placeholder="Select an option" />
        </InputSas>
        </Slide>
        <Slide>
        <Holder>Location </Holder>
        <InputSas>
        <Dropdown options={DzongkhaOp} value={defaultOption1} onChange={handleDzo} placeholder="Select Dzongkhag" />
        </InputSas>
        </Slide>
        <Slide>
            <Holder>Image</Holder>
            <FormInput errorMessage="Upload required" type="file" onChange={(e)=>setFile(e.target.files[0])} required="true"></FormInput>
            <h2>{progress}</h2>
        </Slide>
        <Slide>
            <Holder>Mining Lease Agreement</Holder>
            <FormInput errorMessage="Upload required" type="file" onChange={(e)=>setMLA(e.target.files[0])} required="true"></FormInput>
            <h2>{progress}</h2>
        </Slide>
        <Slide>
            <Holder>Enviromental Clearance</Holder>
            <FormInput errorMessage="Upload required" type="file" onChange={(e)=>setEC(e.target.files[0])} required="true"></FormInput>
            <h2>{progress}</h2>
        </Slide>
        <Button onClick={handlecreate}>Submit</Button>
       
        </InputWrapp>
        
        </Wrapper>
        
        </Container>
        </>
    )
}
