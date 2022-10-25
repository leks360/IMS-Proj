import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
const Container=styled.div`
    display: flex;
    
`
const Wrapper=styled.div`
    flex:5;
`
export default function Home(props) {
    

    return (
       <Container>
        <Sidebar/>
        <Wrapper>
            <Header/>
            The Office Responsible For Compliance and Monitoring of all the Mines and Quarries 
        </Wrapper>
       </Container>
    )
}
