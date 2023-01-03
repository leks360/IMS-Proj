import React from 'react'
import { Worker } from '@react-pdf-viewer/core';
import styled from 'styled-components';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
const Container=styled.div`
    width: 100%;
  height: 100vh;
  z-index: 10;
  position: fixed;
  top: 0px;
  left: 0;
  
  background-color: rgba(0,0,0,0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`
const Card=styled.div`
     width: 900px;
  height: 90%;
  background-color: #fff;
  position: relative;
  display: flex;
  margin: auto auto ;
`
const Btn=styled.div`
    width: 25px;
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
  z-index: 2;
`


export default function MLAANDEC({MLA,setMLAOPEN}) {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    console.log(MLA);
    return (
        <Container>
            <Card>
                <Btn onClick={e=>setMLAOPEN(false)}>X</Btn>
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js">
                    <Viewer plugins={[defaultLayoutPluginInstance]} fileUrl={MLA} />;
                </Worker>
            </Card>   
        </Container>
    )
}
