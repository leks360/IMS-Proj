import React from 'react'
import { useNavigate,Link } from 'react-router-dom';
import styled from 'styled-components';
import GroupsIcon from '@mui/icons-material/Groups';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import DescriptionIcon from '@mui/icons-material/Description';
const Container=styled.div`
    flex:1;
    background-color: #8384857b;
   position: sticky;
   height: 100vh;
   top:0;
`
const Wrapper=styled.div`
    display: flex;
    flex-direction: column;
    padding:10px;
`
const Item=styled.div`
    display:flex;
    gap:15px;
    //justify-content: center;
    margin-left: 13px;
    align-items: center;
     &:hover {
    background-color: lightblue;
    border-radius: 14px;
    }
    padding-top: 10px;
    padding-bottom:10px;
`
const Logo=styled.img`
    height: 80px;
    width: 80px;
    cursor: pointer;
    object-fit: cover;
`
const Head=styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    gap:10px;
`
const LogoText=styled.h3`
    
`
const Hr=styled.hr`
    border-top: 1px solid #8c8b8b;
    width: 100%;
    margin-top: 9px;
    align-self: center;
    margin-bottom: 25px;
`
const Items=styled.div`
    display: flex;
    font-size:16px;
    font-weight: 400;
    flex-direction: column;
    gap:5px;
   
`
const SideLogo=styled.img`
    height:32px;
    width: 32px;
    object-fit: cover;
`
export default function Sidebar(props) {
    
    const Navigate=useNavigate();
    
    return (
        <Container>
            <Wrapper>
                <Head>
                    <Logo  src="https://dgm.gov.bt/MineralPortal/landingpage/images/2.png"/>
                   <LogoText>DGM IMS</LogoText>
                </Head>
                <Hr/>
                <Items>
                   
                    <Link to="/" style={{textDecoration:"none"}}>
                    <Item >
                    <SideLogo style={{opacity:"80%"}} src="https://static.thenounproject.com/png/383745-200.png" />
                   
                       Mines and Quarries
                    
                    </Item>
                    </Link>
                    {/* <Item>
                    <Link to="/mines" style={{textDecoration:"none"}}>
                        Mines and Quarries
                        </Link>
                    </Item> */}
                    <Link to="/levies" style={{textDecoration:"none"}}>
                    <Item>
                        
                        <SideLogo style={{opacity:"80%"}} src="https://icons-for-free.com/iconfiles/png/512/money+icon-1320184267002448371.png" />   
                        
                        Royalty & Mineral Rent
                       
                    </Item>
                    </Link>
                    {/* <Item>
                        ERB
                    </Item> */}
                    <Link to="/staff" style={{textDecoration:"none"}}>
                    <Item>
                    
                        <GroupsIcon style={{color:"black" ,width:"32px",height:"32px",opacity:"80%"}}/>
                        Staff
                     
                    </Item>
                    </Link>
                    
                    <Link to="/dispatchOrder" style={{textDecoration:"none"}}>
                    <Item>
                        <FactCheckIcon style={{color:"black" ,width:"32px",height:"32px",opacity:"80%"}}/>
                            Dispatch Orders
                    </Item>
                    </Link>

                    <Link to="/inspection" style={{textDecoration:"none"}}>
                    <Item>
                  
                        <DescriptionIcon style={{color:"black" ,width:"32px",height:"32px",opacity:"80%"}} />
                        Inspection Reports
                    </Item>
                    </Link>

                    <Link to="/penalty" style={{textDecoration:"none"}}>
                    <Item>
                      
                        <SideLogo style={{opacity:"80%"}} src="https://uxwing.com/wp-content/themes/uxwing/download/crime-security-military-law/penalty-icon.png" />
                        Penalty
                       
                    </Item>
                    </Link>
                    {/* <Item>
                        Complaince Agreements 
                    </Item> */}
                    
                    
                </Items>
            </Wrapper>

        </Container>
    )
}
