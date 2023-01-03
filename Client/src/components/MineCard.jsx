import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
export default function MineCard({quarry,where}) {
    
    const Container=styled.div`
        padding: 10px;
        background-color: #f8f8f8;
        width: 250px;
        height: 300px;
        margin: 10px;
        border-radius: 12px;
        .zoom {
        padding: 50px;
        background-color: green;
        transition: transform .2s; /* Animation */
        width: 150px;
        height: 150px;
        margin: 0 auto;
        margin-right: 15px;
        }

        &:hover {
        position:relative;
        transform: scale(1.05); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
        padding: 20px;
        background-color: #c5c5c58d;
        transition: transform .5s; /* Animation */
        margin: 0 auto;
        
        }
    `
    const Img=styled.img`
        width: 240px;
        height: 240px;
        object-fit: cover;
        border-radius: 12px;
    `
    const Top=styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 6px;
    `
    const Info=styled.div`
        margin-left: 6px;
    `
    const Text=styled.span`
        font-weight: 300;
    `
    const Name=styled.h3`
        font-weight: 400;
        text-decoration: "none";
        
    `
    const Wrapper=styled.div`
        

    `
    const [site,setSite]=useState([]);
    useEffect(()=>{
        setSite(quarry.quarryIncharge);
    },[quarry]);
    console.log(quarry,"WTFFFFF");
    return (
        <Container>
            <Wrapper>
                <Top>
                    {
                        where=="profile"?
                        <Img src="https://aiu.edu.eg/wp-content/uploads/2021/12/no-profile-pic.png"></Img>
                        :<Img src={quarry.img}></Img>
                    }
                    
                </Top>
                <Info>
                    <Name >{quarry.name}</Name>
                    {where=='profile'?
                        <>
                        <Text>Site Assigned: </Text>
                        {site?.map((q)=>{
                            return <span>{q},</span>
                        })}
                        </>
                        :
                        
                        <Text>Concern MI : {quarry.leaseHodler}</Text>
                    }
                    
                </Info>
            </Wrapper>
        </Container>
    )
}
